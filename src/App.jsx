import Icon from './components/Icon.jsx'
import { FaLocationArrow } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'

function App () {

  return (
    <main className="main">
      <div className="main-center">
        <div className="location">

          {/*HEADER */}
          <div className="location__header">
            <div className="location__header-btn">
              <p>Search for places</p>
            </div>
            <div className="location__header-btn-rounded">
              <FaCrosshairs/>
            </div>
          </div>
          <div className="location__status">
            <Icon url="cloudy-day-3"/>
          </div>
          <div className="location__data">
            <div className="location__data-center">
              <div className="location__data-temp">
                <p>15</p>
                <span>℃</span>
              </div>
              <div className="location__data-condition">
                <p>Shower</p>
              </div>
              <div className="location__data-date">
                <p>Today</p>
                <p>.</p>
                <p>Fri, 5 Jun</p>
              </div>
              <div className="location__data--place">
                <GiPositionMarker/>
                <p>Helsinki</p>
              </div>
            </div>
          </div>
        </div>


        {/* FORECAST  */}
        <div className="forecast">

          <h3 className="section__title">Weekly Forecast</h3>

          <div className="forecast__center">

            {/* ITEM */}
            <div className="forecast-item">
              <div className="forecast-item__center">
                <p>Tomorrow</p>
                <Icon url="cloudy-day-1"/>
                <div className="forecast-item-temp">
                  <div className="forecast-item-temp-min">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                  <div className="forecast-item-temp-max">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast-item">
              <div className="forecast-item__center">
                <p>Tomorrow</p>
                <Icon url="cloudy-day-1"/>
                <div className="forecast-item-temp">
                  <div className="forecast-item-temp-min">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                  <div className="forecast-item-temp-max">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast-item">
              <div className="forecast-item__center">
                <p>Tomorrow</p>
                <Icon url="cloudy-day-1"/>
                <div className="forecast-item-temp">
                  <div className="forecast-item-temp-min">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                  <div className="forecast-item-temp-max">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast-item">
              <div className="forecast-item__center">
                <p>Tomorrow</p>
                <Icon url="cloudy-day-1"/>
                <div className="forecast-item-temp">
                  <div className="forecast-item-temp-min">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                  <div className="forecast-item-temp-max">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast-item">
              <div className="forecast-item__center">
                <p>Tomorrow</p>
                <Icon url="cloudy-day-1"/>
                <div className="forecast-item-temp">
                  <div className="forecast-item-temp-min">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                  <div className="forecast-item-temp-max">
                    <p>15</p>
                    <span>℃</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="highlights">

          <h3 className="section__title">Today Highlights</h3>

          <div className="highlights__center">

            <div className="highlights-item">
              <div className="highlights-item__center">
                <p className="highlights-item-title">Wind Status</p>
                <p className="highlights-item-value">
                  <span>7</span> mph
                </p>
                <div className="highlights-item-status">
                  <div className="location__header-btn-rounded">
                    <FaLocationArrow/>
                  </div>
                </div>
              </div>
            </div>


            <div className="highlights-item">
              <div className="highlights-item__center">
                <p className="highlights-item-title">Humidity</p>
                <p className="highlights-item-value">
                  <span>84</span> %
                </p>
              </div>
            </div>

            <div className="highlights-item">
              <div className="highlights-item__center">
                <p className="highlights-item-title">Visibility</p>
                <p className="highlights-item-value">
                  <span>6,4</span> Miles
                </p>
              </div>
            </div>
            <div className="highlights-item">
              <div className="highlights-item__center">
                <p className="highlights-item-title">Air Pressure</p>
                <p className="highlights-item-value">
                  <span>998</span> mb
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
