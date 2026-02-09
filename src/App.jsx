import { useState, useContext } from 'react'
import './App.css'
import Navbar from './components/navbars/Navbar'
import { ThemeContext } from './contexts/ThemeContext'
import VideoSection from './components/VideoSection'

function App() {
  const [count, setCount] = useState(0)
  const { dark, changeTheme } = useContext(ThemeContext)
  return (
    <>

      <div className={`h-[100vh] w-[100%] fixed   ${dark ? "bg-[#242424]" : "bg-white"} duration-500 `}>
        <Navbar />
        <VideoSection/>
      </div>

    </>
  )
}

export default App
