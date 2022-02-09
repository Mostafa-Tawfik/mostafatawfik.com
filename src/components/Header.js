import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MediaQuery from 'react-responsive'

export default function Header(props) {

  // import useLocation 
  const location = useLocation()

  // import useNavigate
  const navigate = useNavigate()
  
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
          nextPage: '/services',
          prevPage: '/portfolio'
        }
      } else if (location.pathname === '/services') {
        return { 
          prev,
          nextPage: '/about',
          prevPage: '/'
        }
      } else if (location.pathname === '/about') {
        return { 
          prev,
          nextPage: '/portfolio',
          prevPage: '/services'
        }
      } else if (location.pathname === '/portfolio') {
        return { 
          prev,
          nextPage: '/',
          prevPage: '/about'
        }
      }
    })
  },[location]) 

  // Mostafa Tawfik effect
  const [isLogo, setIsLogo] = React.useState(true)

  function toggleLogo() {
    setIsLogo(prev => !prev)
  }


  // go to path after delay
  function delayAndGo(e, to) {
    e.preventDefault()

    setTimeout(() => navigate(to), 1300)

    return props.toggleNextPage
  }

  return <div>
    <header>
      <h4 className={isLogo ? 'logo' : location.pathname !== '/' ? 'logo homePage' : 'logo'} onClick={toggleLogo}>
        
      <Link
          to={'/'}
          className={isLogo ? 'myname' : location.pathname !== '/' ? 'myname homePage' : 'home'}
          onClick={(e)=> delayAndGo(e, '/')}>          
          Mostafa Tawfik
        </Link> 
      </h4>

      <MediaQuery minWidth={440}>
      
        <div className='navbar'>
          <ul className='navbar-list'>
            <Link to={'/'} className='navbar-list-items' >Home</Link>
            <Link to={'/services'} className='navbar-list-items'>Services</Link>
            <Link to={'/about'} className='navbar-list-items'>About</Link>
            <Link to={'/portfolio'} className='navbar-list-items'>Portfolio</Link>
          </ul>
        </div>

      </MediaQuery>

      <MediaQuery maxWidth={440}>
      
        <div className="header-holder">

          <Link to={`${switchPage.prevPage}`}>          
            <img src='./images/previous.png' className='before' width="35px" alt="previous page button"></img>
          </Link> 

          <button className={props.isActive.menuActive ? 'toggle active' : 'toggle'} onClick={props.toggle}></button>

          <Link to={`${switchPage.nextPage}`}>          
            <img src='./images/next.png' className='next' width="35px" alt="next page button"></img>
          </Link>         

        </div>
      </MediaQuery>

    </header>
  </div>;
}
