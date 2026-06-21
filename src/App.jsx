import { useState, useContext } from 'react'
import './App.css'
import Navbar from './components/navbars/Navbar' // Check path
import { ThemeContext } from './contexts/ThemeContext'
import VideoSection from './components/VideoSection' // Check path
import VideoPlayer from './components/VideoPlayer' // <-- NAYA IMPORT
import { Routes, Route } from 'react-router-dom' // <-- NAYA IMPORT

function App() {
  const [count, setCount] = useState(0)
  const { dark, changeTheme } = useContext(ThemeContext)
  return (
    <>
      <div className={`h-[100vh] w-[100%] flex flex-col overflow-hidden ${dark ? "bg-[#0f0f0f]" : "bg-white"} duration-500 `}>
        <Navbar />
        {/* Container jisme pages load honge */}
        <div className="flex-1 w-full overflow-hidden">
          <Routes>
             {/* Home Page par VideoSection dikhega */}
             <Route path="/" element={<VideoSection />} />
             {/* Video click hone par VideoPlayer dikhega */}
             <Route path="/video/:videoId" element={<VideoPlayer />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App