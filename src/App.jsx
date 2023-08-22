import Icon from './components/Icon.jsx'

function App () {

  return (
    <main className="main">
      <div className="main-center">

        <div className="location">
          <div className="location--header">
            <div>search</div>
            <div>current location</div>
          </div>
          <div className="location--status">
            <Icon url="cloudy-day-3"/>
          </div>
        </div>

        <div className="forecast">
          <div>forecast item</div>
          <div>forecast item</div>
          <div>forecast item</div>
          <div>forecast item</div>
          <div>forecast item</div>
        </div>

        <div className="highlights">
          <div>highlights item</div>
          <div>highlights item</div>
          <div>highlights item</div>
          <div>highlights item</div>
        </div>

      </div>
    </main>
  )
}

export default App
