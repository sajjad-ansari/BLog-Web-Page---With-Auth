import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Topbar from './components/TopBar'

function App() {

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        {/* Navbar */}
        <Topbar />
        <div className="flex flex-grow my-6">
          {/* Sidebar detached from the navbar */}
          <SideBar/>
          {/* Main content */}
          <MainContent/>
        </div>
      </div>
    </>
  )
}

export default App
