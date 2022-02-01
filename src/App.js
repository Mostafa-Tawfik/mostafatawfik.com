import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio'
import {Routes, Route} from 'react-router-dom';

function App() {


  const [isActive, setIsActive] = React.useState(true)

  function toggle() {
    setIsActive(prev => !prev)
  }

  return (
    <section className={isActive ? 'showcase' : 'showcase active'}>
      <img 
        className="bg" 
        src="./images/quinton-coetzee-unsplash.webp"
        alt="keyboard background"></img>
      <div className="overlay"></div>
      <Routes>
        <Route path='/' element={<Home isActive={isActive} toggle={toggle}/>}/>
        <Route path='/About' element={<About isActive={isActive} toggle={toggle}/>}/>
        <Route path='/Portfolio' element={<About isActive={isActive} toggle={toggle}/>}/>
      </Routes>
      
    </section>
  )
}

export default App;
