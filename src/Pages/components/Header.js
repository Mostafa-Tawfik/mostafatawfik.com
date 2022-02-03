import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
  
  console.log(props.isActive);

  return <div>
    <header>
      <h2 className={isLogo ? 'logo' : 'logo homePage'} onClick={toggleLogo}>
        
      <Link
          to={'/'}
          className={isLogo ? 'home' : 'home homePage'}
          onClick={(e)=> delayAndGo(e, '/')}>          
          Mostafa Tawfik
        </Link> 
      </h2>

      <div className="header-holder">

        <Link
          to={`${switchPage.prevPage}`}
          onClick={(e)=> delayAndGo(e, `${switchPage.prevPage}`)}>          
          <img src='./images/previous.png' className='before' width="35px" alt="previous page button"></img>
        </Link> 

        <button className={props.isActive.menuActive ? 'toggle active' : 'toggle'} onClick={props.toggle}></button>

        <Link
          to={`${switchPage.nextPage}`}
          onClick={(e) => {
            props.toggleNextPage()
            delayAndGo(e, `${switchPage.prevPage}`)
          }}>          
          <img src='./images/next.png' className='next' width="35px" alt="next page button"></img>
        </Link>         

      </div>
    </header>
  </div>;
}
