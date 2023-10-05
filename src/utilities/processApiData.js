import { convertTemperature } from './convertTemperature.js'
import { convertWindDegrees } from './convertWindDegrees.js'
export const processApiData = (data, tempUnit) => {

  const weekly_forecast = []
  const { list, city } = data
  const firstRecord = new Date(list[0].dt * 1000).getHours()

  list.map(({ dt, main, wind, visibility, weather }) => {

    // new object
    const daily_forecast = {}
    const date = new Date(dt * 1000)

    // Grab the current time of each day.
    if (date.getHours() === firstRecord) {
      daily_forecast.date = date.toLocaleDateString()
      daily_forecast.location = city.name
      daily_forecast.tempUnit = tempUnit
      daily_forecast.current_temp = convertTemperature(main['temp'],tempUnit)
      daily_forecast.time = date.getHours()
      daily_forecast.weather_title = [...weather][0]['description']
      daily_forecast.weather_icon = weather[0].icon[0] + weather[0].icon[1]
      daily_forecast.temp_min =convertTemperature(main['temp_min'],tempUnit)
      daily_forecast.temp_max = convertTemperature(main['temp_max'],tempUnit)
      daily_forecast.air_pressure = main['pressure']
      daily_forecast.air_humidity = main['humidity']
      daily_forecast.wind_degrees = wind['deg']
      daily_forecast.wind_direction = convertWindDegrees(wind['deg'])
      daily_forecast.wind_speed = wind['speed']
      daily_forecast.visibility = Math.floor(visibility / 1609)
      weekly_forecast.push(daily_forecast)
    }

  })

  return weekly_forecast
}