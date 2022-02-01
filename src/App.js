import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';

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
      <Home isActive={isActive} toggle={toggle}/>
      
    </section>
  );
}

export default App;
