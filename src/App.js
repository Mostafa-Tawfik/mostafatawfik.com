import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Menu from './Pages/components/Menu'

function App() {

  const [isActive, setIsActive] = React.useState({
    menuActive: false,
  })

  // toggle menu
  function toggleMenu() {
    setIsActive(prev => {
      return {
        ...prev,
        menuActive: !isActive.menuActive
      }
    })
  }

  
  // switch pages animations
  const location = useLocation()
  
  return (
    <section>
      <AnimatePresence exitBeforeEnter>
      <section 
      className={`showcase ${location.pathname.split('/')[1].toLowerCase()} ${isActive.menuActive ? 'active' : ''}`}>   

        <img 
          className="bg" 
          src="./images/quinton-coetzee-unsplash.webp"
          alt="keyboard background"></img>

        <div className="overlay"></div>

          <Routes location={location} key={location.pathname}>

            <Route path='/' 
              element={<Home 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

            <Route path='/About' 
              element={<About 
                isActive={isActive} toggle={toggleMenu}
                />}/>

            <Route path='/Portfolio' 
              element={<Portfolio 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

          </Routes>
      </section>
        </AnimatePresence>
      <Menu />
    </section>
  )
}

export default App;
