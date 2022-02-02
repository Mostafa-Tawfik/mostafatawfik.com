import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {

  
  const [isLogo, setIsLogo] = React.useState(true)

  function toggleLogo() {
    setIsLogo(prev => !prev)
  }
  
  // import useLocation 
  const location = useLocation()
  
  // a state to decide next and prev page path
  const [switchPage, setswitchPage] = React.useState({
    currentPage: location.pathname,
    nextPage: '',
    prevPage: ''
  })
  
  // change switchpage state based on current page path
  React.useEffect(()=> {
    setswitchPage(prev => {
      if (location.pathname === '/') {
        return { 
          prev,
          nextPage: '/About',
          prevPage: '/Portfolio'
        }
      } else if (location.pathname === '/About') {
        return { 
          prev,
          nextPage: '/Portfolio',
          prevPage: '/'
        }
      } else if (location.pathname === '/Portfolio') {
        return { 
          prev,
          nextPage: '/',
          prevPage: '/About'
        }
      }
    })
  },[location]) 
  
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
          to={`${switchPage.prevPage}`}>          
          <img src='./images/previous.png' className='before' width="35px" alt="previous page button"></img>
        </Link> 
        
        <button className={props.isActive ? 'toggle' : 'toggle active'} onClick={props.toggle}></button>

        <Link
          to={`${switchPage.nextPage}`}>          
          <img src='./images/next.png' className='next' width="35px" alt="next page button"></img>
        </Link>         

      </div>
    </header>
  </div>;
}
