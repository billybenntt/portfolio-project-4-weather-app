import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'

function App () {
  return (
    <div className="bg-[#100E1D] flex flex-col lg:flex-row">
      <SideBar/>
      <MainContent/>
    </div>
  )
}

export default App
