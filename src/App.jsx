import Icon from './components/Icon.jsx'
import { FaLocationArrow} from 'react-icons/fa'

function App () {

  return (
    <main className="main">
      <div className="main-center">
        <div className="location">
          <div className="location--group-1">
            <div className="location--group-1-btn">
              <p>Search for places</p>
            </div>
            <div className="location--group-1-btn-2">
              <FaLocationArrow/>
            </div>
          </div>
          <div className="location--group-2">
            <Icon url="cloudy-day-3"/>
          </div>

          <div className="location--group-3">
            <div className="location--group-3-center">
              <h1 className="location--group-3-center__temp">15℃</h1>
              <h3>Shower</h3>
              <h3></h3>
            </div>
          </div>
        </div>

        <div className="forecast">
          <div className="forecast-center">
            <div className="forecast-item">forecast item</div>
            <div className="forecast-item">forecast item</div>
            <div className="forecast-item">forecast item</div>
            <div className="forecast-item">forecast item</div>
            <div className="forecast-item ra">forecast item</div>
          </div>
        </div>

        <div className="highlights">
          <div className="highlights-center">
            <div className="highlights-item">highlights item</div>
            <div className="highlights-item">highlights item</div>
            <div className="highlights-item">highlights item</div>
            <div className="highlights-item">highlights item</div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
