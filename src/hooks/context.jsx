import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'
import apiMockData from '../data/apiMockData.js'
import { processApiData } from '../utilities/processApiData.js'
import { fetchUserLocation } from '../utilities/fetchUserLocation.js'

const baseUrl = `http://localhost:3030/data/2.5/forecast?appid=${import.meta.env.VITE_APP_ID}&`

// Initial Reducer State
const initialState = {
  isTextLocation: true,
  isLoading: false,
  isSideBarOpen: false,
  weatherData: processApiData(apiMockData),
  location: 'beijing',
  latitude: 0.0,
  longitude: 0.0,
  tempUnit: 'C'
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const handleCoordinates = async () => {
    const data = await fetchUserLocation()
    dispatch({ type: 'SET_COORDINATES', payload: data })
  }

  const handleLocation = (newLocation) => {
    console.log(newLocation)

    dispatch({ type: 'SET_LOCATION', payload: newLocation })
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const weather_data = processApiData(data, state.tempUnit)
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
      fetchData(`${baseUrl}q=${state.location}`).then()
    } else {
      fetchData(`${baseUrl}lat=${state.latitude}&lon=${state.longitude}`).then()
    }
  }, [state.isTextLocation, state.location, state.tempUnit])

  return (
    <AppContext.Provider value={{
      ...state, toggleSidebar,
      handleCoordinates, handleConversion, handleLocation
    }}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext () {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
