import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'

import forecastData from '../data/mockData.js'

// Initial Reducer State
const initialState = {
  loading: false,
  isSideBarOpen: false,
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  const { list } = forecastData

  console.log(list.length)

  list.map(({ dt, main, wind, visibility }) => {

    const date = new Date(dt * 1000)
    const { temp_min, temp_max, pressure, humidity } = main
    const { deg, speed } = wind


    if (date.getHours() === 23) {
      console.log(date)
      console.log('Minimum Temp->', temp_min)
      console.log('Maximum Temp->', temp_max)
      console.log('Air Pressure->', pressure)
      console.log('Humidity %->', humidity)
      console.log('Wind Degrees->', deg)
      console.log('Wind Speed->', speed)
    }

  })

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' })

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
