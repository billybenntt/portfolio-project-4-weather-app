import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'
import apiMockData from '../data/apiMockData.js'
import { processApiData } from '../utilities/processApiData.js'
import { fetchUserLocation } from '../utilities/fetchUserLocation.js'

const baseUrl = `http://localhost:3030/data/2.5/forecast?appid=${import.meta.env.VITE_APP_ID}&`

// Initial Reducer State
const initialState = {
  isTextLocation: false,
  isLoading: false,
  isSideBarOpen: false,
  weatherData: processApiData(apiMockData),
  currentTextLocation: 'Taipei',
  currentNumLocationLat: 80.0123,
  currentNumLocationLon: -34.034,
  conversionType: 'F'

}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const handleLocation = async () => {
    const data = await fetchUserLocation()
    console.log(data)

  }

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const weather_data = processApiData(data, state.conversionType)
      console.log(weather_data)
      dispatch({ type: 'SET_WEATHER', payload: weather_data })
    } catch (e) {
    }
  }

  const handleConversion = (newConversion) => {
    dispatch({ type: 'SET_CONVERSION', payload: newConversion })
  }

  // FETCH DATA
  useEffect(() => {

    if (state.isTextLocation) {
      fetchData(`${baseUrl}q=${state.currentTextLocation}`).then()
    } else {
      fetchData(`${baseUrl}lat=${state.currentNumLocationLat}&lon=${state.currentNumLocationLon}`).then()
    }

  }, [state.conversionType])

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar, handleLocation, handleConversion }}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext () {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
