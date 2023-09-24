export const processData = ({ list }) => {
  const all_records = []

  list.map(({ dt, main, wind, visibility, weather }) => {

    // new object
    const packed_data = {}
    const date = new Date(dt * 1000)


    console.log(date)
    // Grab last record
    if (date.getHours() === 23) {
      packed_data.date = date.toLocaleDateString()
      packed_data.weather_title = [...weather][0]['description']
      packed_data.weather_icon = weather[0].icon[0] + weather[0].icon[1]
      packed_data.temp_min = Math.floor((main['temp_min'] - 273.15))
      packed_data.temp_max = Math.floor((main['temp_max'] - 273.15)) + 5
      packed_data.air_pressure = main['pressure']
      packed_data.air_humidity = main['humidity']
      packed_data.wind_direction = wind['deg']
      packed_data.wind_speed = wind['speed']
      packed_data.visibility = Math.floor(visibility / 1609)
      all_records.push(packed_data)
    }


  })

  return all_records
}