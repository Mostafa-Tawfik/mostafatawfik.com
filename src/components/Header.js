import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {

  // import useLocation 
  const location = useLocation()

  // import useNavigate
  const navigate = useNavigate()
  
  // a state to decide next and prev page path
  // const [switchPage, setswitchPage] = React.useState({
  //   currentPage: location.pathname,
  //   nextPage: '',
  //   prevPage: ''
  // })
  
  // change switchpage state based on current page path
  // React.useEffect(()=> {
  //   setswitchPage(prev => {
  //     if (location.pathname === '/') {
  //       return { 
  //         prev,
  //         nextPage: '/About',
  //         prevPage: '/Portfolio'
  //       }
  //     } else if (location.pathname === '/About') {
  //       return { 
  //         prev,
  //         nextPage: '/Services',
  //         prevPage: '/'
  //       }
  //     } else if (location.pathname === '/Services') {
  //       return { 
  //         prev,
  //         nextPage: '/Portfolio',
  //         prevPage: '/About'
  //       }
  //     } else if (location.pathname === '/Portfolio') {
  //       return { 
  //         prev,
  //         nextPage: '/',
  //         prevPage: '/Services'
  //       }
  //     }
  //   })
  // },[location]) 

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

  const style = {
  
    // Adding media querry..
    '@media (maxWidth: 800px)': {
      display: 'none',
    }
  }
  
  return <div>
    <header>
      <h6 className={isLogo ? 'logo' : location.pathname !== '/' ? 'logo homePage' : 'logo'} onClick={toggleLogo}>
        
      <Link
          to={'/'}
          className={isLogo ? 'home' : location.pathname !== '/' ? 'home homePage' : 'home'}
          onClick={(e)=> delayAndGo(e, '/')}>          
          Mostafa Tawfik
        </Link> 
      </h6>

      <div className='navbar' style={style}>
        <ul className='navbar-list'>
          <HashLink smooth to={'/'} className='navbar-list-items' >Home</HashLink>
          <HashLink smooth to={'#services'} className='navbar-list-items'>Services</HashLink>
          <HashLink smooth to={'#about'} className='navbar-list-items'>About</HashLink>
          <HashLink smooth to={'#portfolio'} className='navbar-list-items'>Portfolio</HashLink>
        </ul>
      </div>

      {/* <div className="header-holder">

        <Link to={`${switchPage.prevPage}`}>          
          <img src='./images/previous.png' className='before' width="35px" alt="previous page button"></img>
        </Link> 

        <button className={props.isActive.menuActive ? 'toggle active' : 'toggle'} onClick={props.toggle}></button>

        <Link to={`${switchPage.nextPage}`}>          
          <img src='./images/next.png' className='next' width="35px" alt="next page button"></img>
        </Link>         

      </div> */}
    </header>
  </div>;
}
