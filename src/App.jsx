import Icon from './components/Icon.jsx'

function App () {

  return (
    <main className="main">
      <div className="main-center">
        <div className="location">
          <div className="location--group-1">
            <div>search</div>
            <div>current location</div>
          </div>
          <div className="location--group-2">
            <Icon url="cloudy-day-3"/>
          </div>

          <div className="location--group-3">
            <h2>15c</h2>
            <h3>Shower</h3>
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
