import React from 'react'
import './App.scss'
import Home from './Pages/Home/Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
// import Menu from './components/Menu'

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

          </Routes>
      </section>
        </AnimatePresence>
      {/* <Menu /> */}
    </section>
  )
}

export default App;
