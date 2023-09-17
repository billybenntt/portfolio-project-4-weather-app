import { useEffect, useReducer, createContext, useContext } from 'react'
import reducerFunction from './reducer.jsx'

import forecastData from '../data/mockData.js'

// Initial Reducer State
const initialState = {
  loading: false,
  isSideBarOpen: false,
}

const processData = (list) => {
  const all_records = []

  list.map(({ dt, main, wind, visibility, weather }) => {

    // new object
    const packed_data = {}

    //   Destructure
    const [weather_data] = weather
    const date = new Date(dt * 1000)
    const { temp_min, temp_max, pressure, humidity } = main
    const { deg, speed } = wind

    // Grab last record
    if (date.getHours() === 23) {
      packed_data.date = date
      packed_data.weather_data = weather_data.main
      packed_data.temp_min = temp_min
      packed_data.temp_max = temp_max
      packed_data.air_pressure = pressure
      packed_data.humidity = humidity
      packed_data.wind_direction = deg
      packed_data.wind_speed = speed
      packed_data.visibility = visibility
      all_records.push(packed_data)
    }

  })

  console.log(all_records)
  return list
}

const AppContext = createContext(undefined)

function AppProvider ({ children }) {

  // REDUCER INIT
  const [state, dispatch] = useReducer(reducerFunction, initialState, undefined)

  const { list } = forecastData

  processData(list)

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
