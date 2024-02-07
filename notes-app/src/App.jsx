import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import Sidebar from './components/SideBar'

function App() {
  const [loadView, setLoadView] = useState(false)
  const [darkMode,setDarkMode]=useState(true)

  function click(){
    setLoadView(prevState=> !prevState)
  }
  function changeMode(){
    setDarkMode(prevState=>!prevState)
  }

  return (
    <div className={darkMode?"dark-mode":"light-mode"}>
      {loadView===false?<Intro
        event={click}
        mode={changeMode}
      />:""}
      {loadView?<Sidebar/>:""}
    </div>
  )
}

export default App
