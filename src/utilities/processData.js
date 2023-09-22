export const processData = (list) => {
  const all_records = []
  list.map(({ dt, main, wind, visibility, weather }) => {

    // new object
    const packed_data = {}
    const date = new Date(dt * 1000)

    // Grab last record
    if (date.getHours() === 23) {
      packed_data.date = date.toLocaleDateString()
      packed_data.weather_title = [...weather][0]['main']
      packed_data.weather_icon = Math.floor(Math.random() * (24 - 10) + 10)
      packed_data.temp_min = Math.floor((main['temp_min'] - 273.15))
      packed_data.temp_max = Math.floor((main['temp_max'] - 273.15)) + 5
      packed_data.air_pressure = main['pressure']
      packed_data.air_humidity= main['humidity']
      packed_data.wind_direction = wind['deg']
      packed_data.wind_speed = wind['speed']
      packed_data.visibility = visibility
      all_records.push(packed_data)
    }

  })

  return all_records
}