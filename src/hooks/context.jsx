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
  currentLocation: ''
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)


  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const weather_data = processData(data)
      console.log(weather_data)

      dispatch({ type: 'SET_WEATHER', payload: weather_data })
    } catch (e) {

    }

  }

  // FETCH DATA
  useEffect(() => {
    fetchData(baseUrl).then()
  }, [])

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

function useGlobalContext () {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
