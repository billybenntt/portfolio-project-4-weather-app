import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'
import defaultData from '../data/apiMockData.js'

// Initial Reducer State
const initialState = {
  isLoading: false,
  isSideBarOpen: false,
  weatherData: defaultData
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  console.log(state.weatherData)

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const fetchWeather = () => {
    dispatch({ type: 'SET_LOADING' })





  }

  // FETCH DATA
  useEffect(() => {

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
