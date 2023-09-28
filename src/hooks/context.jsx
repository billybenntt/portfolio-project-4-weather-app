import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'
import apiMockData from '../data/apiMockData.js'
import { processData } from '../utilities/processData.js'

const baseUrl = 'http://localhost:3030/data/2.5/forecast?q=taipei&appid=81dd99425645fc4a51c4b1a1ef6118d2'

// Initial Reducer State
const initialState = {
  isLoading: false,
  isSideBarOpen: false,
  weatherData: processData(apiMockData),
  currentLocation: '',
  conversionType: 'F'
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const handleLocation = () => {

  }

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const weather_data = processData(data, state.conversionType)
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
    fetchData(baseUrl).then()
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
