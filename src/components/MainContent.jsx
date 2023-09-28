import SmallCard from './SmallCard.jsx'
import LargeCard from './LargeCard.jsx'
import { nanoid } from 'nanoid'
import { useGlobalContext } from '../hooks/context.jsx'

function MainContent () {

  const { weatherData, conversionType, handleConversion } = useGlobalContext()
  const [todayForecast] = weatherData

  const forecastList = weatherData.map((item, index) => {
    let { weather_title, date, weather_icon, temp_min, temp_max } = item

    if (index === 0) {
      date = 'Today'
    }
    if (index === 1) {
      date = 'Tomorrow'
    }
    const id = nanoid()
    return (
      <SmallCard
        key={id}
        date={date}
        weather_title={weather_title}
        weather_icon={weather_icon}
        temp_min={temp_min}
        temp_max={temp_max}
        temp={conversionType}
      />
    )
  })

  return (
    <div className="text-gray-150 p-10 flex-grow">
      {/*TEMP SWITCH*/}
      <div className="space-x-3 text-right">
        <button className="bg-[#585676] rounded-full w-10 h-10  font-bold text-xl" onClick={() => handleConversion('C')}>
          &deg;C
        </button>
        <button className="bg-[#585676] rounded-full w-10 h-10  font-bold text-xl" onClick={() => handleConversion('F')}>
          &deg;F
        </button>
      </div>

      {/*FORECAST */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-5 gap-10 justify-center">
        {forecastList}
      </div>

      {/*HIGHLIGHTS */}
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">

          {/*WIND STATUS*/}
          <LargeCard title="Wind Status" num={todayForecast.wind_speed} desc="mph">
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i className="fa fa-location-arrow rotate-45"></i>
              </div>
              <p className="text-gray-150 text-sm">WSW</p>
            </div>
          </LargeCard>

          {/*HUMIDITY*/}
          <LargeCard title="Humidity" num={todayForecast.air_humidity} desc="%">
            <div className="self-stretch text-gray-250 text-xs space-y-1">
              <div className="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFEC65] h-2"
                  style={{ width: `${todayForecast.air_humidity}%` }}
                ></div>
              </div>
              <p className="text-right">%</p>
            </div>
          </LargeCard>

          {/*VISIBILITY*/}
          <LargeCard title="Visibility" num={todayForecast.visibility} desc=" miles"/>

          {/*AIR PRESSURE*/}
          <LargeCard title="Air Pressure" num={todayForecast.air_pressure} desc=" mb"/>
        </div>
      </div>
    </div>
  )
}

export default MainContent
