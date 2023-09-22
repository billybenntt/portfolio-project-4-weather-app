import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'
import apiMockData from '../data/apiMockData.js'
import { processData } from '../utilities/processData.js'



// Initial Reducer State
const initialState = {
  isLoading: false,
  isSideBarOpen: false,
  weatherData: processData(apiMockData.list)
}




const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  console.log(state.weatherData)

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })
  }

  const fetchData = () => {
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
