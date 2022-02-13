import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../components/header.module.scss'

export default function Header(props) {
  // import useLocation 
  const location = useRouter()

  // import useNavigate
  // const navigate = useNavigate()
  
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
          nextPage: '/about',
          prevPage: '/portfolio'
        }
      } else if (location.pathname === '/about') {
        return { 
          prev,
          nextPage: '/portfolio',
          prevPage: '/'
        }
      } else if (location.pathname === '/portfolio') {
        return { 
          prev,
          nextPage: '/',
          prevPage: '/about'
        }
      } else {
        return {
          prev,
          nextPage: '/',
          prevPage: '/portfolio'
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

    setTimeout(() => location.push(to), 1300)

  }

  return <header className={styles.header}>

      <h4 className={isLogo ? `${styles.logo}` : location.pathname !== '/' ? `${styles.logo} ${styles.homePage}` : `${styles.logo}`} 
      onClick={toggleLogo}>
    
      <Link
          href='/'
          className={isLogo ? `${styles.myname}` : location.pathname !== '/' ? `${styles.myname} ${styles.homePage}` : `${styles.myname}`}
          onClick={(e)=> delayAndGo(e, '/')}>          
          Mostafa Tawfik
        </Link> 
      </h4>

        <div className={styles.navbar}>
          <ul>
            <Link href='/' >Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/portfolio'>Portfolio</Link>
          </ul>
        </div>

        <div className={styles.navbarMobile}>

          <Link href={`${switchPage.prevPage}`}>          
            <img src='../../images/previous.png' className={styles.before} width="35px" alt="previous page button"></img>
          </Link> 

          <button className={props.isActive.menuActive ? `${styles.toggle} ${styles.active}` : `${styles.toggle}`} onClick={props.toggle}></button>

          <Link href={`${switchPage.nextPage}`}>          
            <img src='../../images/next.png' className={styles.next} width="35px" alt="next page button"></img>
          </Link>         

        </div>

    </header>;
}
