import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import Sidebar from './components/SideBar'

function App() {
  const [count, setCount] = useState(false)

  function click(){
    setCount(prevState=> !prevState)
  }

  return (
    <div>
      {count===false?<Intro
        event={click}
      />:""}
      {count?<Sidebar/>:""}
    </div>
  )
}

export default App
