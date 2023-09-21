function SmallCard (props) {

  const { weather_title, weather_icon, temp_min, temp_max } = props

  return (
    <div className="bg-darkblue py-4 px-5 flex flex-col items-center space-y-4">
      <p>{weather_title}</p>
      <img src={`/images/static/03.svg`} alt="weather-icon" style={{  width: '100px' }}/>
      <div className="flex justify-between space-x-5">
        <p>
          {max}&deg;{temp}
        </p>
        <p className="text-gray-250">
          {min}&deg;{temp}
        </p>
      </div>
    </div>

  )
}

export default SmallCard
