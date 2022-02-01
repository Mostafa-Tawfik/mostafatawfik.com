import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(props) {

  const [isLogo, setIsLogo] = React.useState(true)

  function toggleLogo() {
    setIsLogo(prev => !prev)
  }

  return <div>
    <header>
      <h2 className={isLogo ? 'logo' : 'logo homePage'} onClick={toggleLogo}>
      <Link
          to={'/'}
          className={isLogo ? 'home' : 'home homePage'}>          
          Mostafa Tawfik
        </Link> 
      </h2>

      <div className="header-holder">

        <Link
          to={'/Portfolio'}>          
          <img src='./images/previous.png' className='before' width="35px" alt="previous page button"></img>
        </Link> 
        
        <button className={props.isActive ? 'toggle' : 'toggle active'} onClick={props.toggle}></button>

        <Link
          to={'/About'}>          
          <img src='./images/next.png' className='next' width="35px" alt="next page button"></img>
        </Link>         

      </div>
    </header>
  </div>;
}
