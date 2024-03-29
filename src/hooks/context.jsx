import { useEffect, useReducer, createContext, useContext } from 'react'
import { processApiData } from '../utilities/processApiData.js'
import { fetchUserLocation } from '../utilities/fetchUserLocation.js'
import defaultData from '../data/defaultData.js'
import reducerFunction from './reducer.jsx'
import toast from 'react-hot-toast'

const baseUrl = `${import.meta.env.VITE_APP_ENDPOINT}${import.meta.env.VITE_APP_ID}&`

// Initial Reducer State
const initialState = {
  isTextLocation: true,
  isLoading: false,
  isSideBarOpen: false,
  weatherData: processApiData(defaultData),
  location: 'New Zealand',
  latitude: 0.0,
  longitude: 0.0,
  tempUnit: 'C'
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  // HANDLER FUNCTIONS
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const handleCoordinates = async () => {
    localStorage.removeItem('location')
    const data = await fetchUserLocation()
    dispatch({ type: 'SET_COORDINATES', payload: data })
  }

  const handleLocation = (newLocation) => {
    localStorage.removeItem('location')
    dispatch({ type: 'SET_LOCATION', payload: newLocation })
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const weather_data = processApiData(data, state.tempUnit)
      localStorage.setItem('location', JSON.stringify(data))
      toast.success('Location Updated')
      dispatch({ type: 'SET_WEATHER', payload: weather_data })
    } catch (e) {
      toast.error('No Location Found')
    }
  }

  const loadData = () => {
    const storedLocationData = localStorage.getItem('location')

    if (storedLocationData) {
      const weather_data = processApiData(JSON.parse(storedLocationData), state.tempUnit)
      dispatch({ type: 'SET_WEATHER', payload: weather_data })
    } else {
      if (state.isTextLocation) {
        fetchData(`${baseUrl}q=${state.location}`).then()
      } else {
        fetchData(`${baseUrl}lat=${state.latitude}&lon=${state.longitude}`).then()
      }

    }
  }

  const handleConversion = (newConversion) => {
    dispatch({ type: 'SET_CONVERSION', payload: newConversion })
  }

  // FETCH DATA
  useEffect(() => {
    loadData()
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
