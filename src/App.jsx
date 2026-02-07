import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbars/Navbar'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const { dark, changeTheme } = useContext(ThemeContext)
  return (
    <>

      <div className={`h-[100vh] w-[100%] fixed   ${dark ? "bg-[#242424]" : "bg-white"} duration-500 `}>
        <Navbar />
    
      </div>

    </>
  )
}

export default App
