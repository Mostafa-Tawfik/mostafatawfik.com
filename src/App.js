import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio'
import {Routes, Route} from 'react-router-dom';

function App() {


  const [isActive, setIsActive] = React.useState({
    menuActive: false,
    nextPageActive: false,
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

  // toggle next
  function toggleNextPage() {
    setIsActive(prev => {
      return {
        ...prev,
        nextPageActive: !isActive.nextPageActive
      }
    })
  }

  return (
    <section className={isActive.menuActive ? 'showcase active' : 'showcase'}>
      <img 
        className="bg" 
        src="./images/quinton-coetzee-unsplash.webp"
        alt="keyboard background"></img>
      <div className="overlay"></div>
      <Routes>
        <Route path='/' element={<Home isActive={isActive} toggleNextPage={toggleNextPage} toggle={toggleMenu}/>}/>
        <Route path='/About' element={<About isActive={isActive} toggleNextPage={toggleNextPage} toggle={toggleMenu}/>}/>
        <Route path='/Portfolio' element={<Portfolio isActive={isActive} toggleNextPage={toggleNextPage} toggle={toggleMenu}/>}/>
      </Routes>
      
    </section>
  )
}

export default App;
