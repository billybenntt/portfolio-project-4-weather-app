function SmallCard (props) {

  const { weather_title, date, weather_icon, temp_min, temp_max } = props

  return (
    <div className="bg-darkblue py-4 px-5 flex flex-col items-center space-y-1">
      <p>{date}</p>
      <img src={`/images/static/${weather_icon}.svg`} alt="weather-icon" style={{ width: '100px' }}/>
      <p className="capitalize text-center text-sm text-gray-250 font-bold">{weather_title}</p>
      <div className="flex justify-between space-x-5">
        <p>
          {temp_max}&deg;
        </p>
        <p className="text-gray-250">
          {temp_min}&deg;
        </p>
      </div>
    </div>

  )
}

export default SmallCard
