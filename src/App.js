import React from 'react'
import './App.scss'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Services from './Pages/Services/Services'
import SocialLinks from './components/SocialLinks'
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Menu from './components/Menu'
import Footer from './components/Footer'
import MediaQuery from 'react-responsive'

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

        {/* <img 
          className="bg" 
          src="./images/quinton-coetzee-unsplash.webp"
          alt="keyboard background"></img>

        <div className="overlay"></div> */}

          <Routes location={location} key={location.pathname}>

            <Route path='/' 
              element={<Home 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

            <Route path='/about' 
              element={<About 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

            <Route path='/portfolio' 
              element={<Portfolio 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

            <Route path='/services' 
              element={<Services 
                isActive={isActive} 
                toggle={toggleMenu}
                />}/>

          </Routes>
      <Footer />
      </section>
      </AnimatePresence>
      <SocialLinks isActive={isActive}/>
      <MediaQuery maxWidth={440}>
        <Menu />
      </MediaQuery>
    </section>
  )
}

export default App;
