import SearchLocation from './SearchLocation.jsx'
import { useGlobalContext } from '../hooks/context.jsx'

function SideBar () {

  const { isSideBarOpen, toggleSidebar, weatherData } = useGlobalContext()
  const [todayForecast] = weatherData



  return (
    <div className="flex flex-col min-h-screen bg-darkblue w-full lg:w-1/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden">
      {isSideBarOpen ? (
        <SearchLocation/>
      ) : (
        <>
          <div className="relative flex justify-between mb-10">
            <button
              className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 shadow-lg"
              onClick={toggleSidebar}>
              Search for places
            </button>
            <button className="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 rounded-full shadow-lg">
              <i className="fa fa-map-marker"></i>
            </button>
          </div>

          <div className="relative -mx-36 flex justify-center items-center max-h-40">
            {/*BACKGROUND */}
            <img
              src="/images/cloud_bg.png"
              alt="cloud-background"
              className="opacity-10 absolute max-w-52"
            />
            {/* WEATHER ICON */}
            <img src={`/images/animated/${todayForecast.weather_icon}.svg`} alt="weather-icon" style={{ height: 300, width: 300 }}/>
          </div>

          <div className="flex flex-col items-center justify-between flex-grow pt-6">
            <h1 className="text-gray-150 text-[144px] font-medium">
              {todayForecast.current_temp}<span className="text-5xl text-gray-250">&deg;{todayForecast.conversionType}</span>
            </h1>
            <h3 className="font-semibold text-4xl text-gray-250 capitalize">{todayForecast.weather_title}</h3>
            <div className="flex flex-col items-center text-center text-gray-350 text-lg space-y-2">
              <p>Today &bull; {todayForecast.date}</p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                {todayForecast.location}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SideBar
