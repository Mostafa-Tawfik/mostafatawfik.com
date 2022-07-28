import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/components/header.module.scss'

export default function Header(props) {
  // import useLocation 
  const location = useRouter()

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
          prevPage: '/contact'
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
          nextPage: '/contact',
          prevPage: '/about'
        }
      } else if (location.pathname === '/contact') {
        return { 
          prev,
          nextPage: '/',
          prevPage: '/portfolio'
        }
      } else {
        return {
          prev,
          nextPage: '/',
          prevPage: '/contact'
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

    setTimeout(() => location.push(to).then(setIsLogo(prev => !prev)), 1300)
    
  }

  // navbar animation
  const [navbarActive, setNavbarActive] = React.useState(
    location.pathname !== '/' ? 
    `${location.pathname.split('/')[1]}Active` : 
    'homeActive'
    )

  // handle on hash change
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setNavbarActive(
        url !== '/' ? 
        `${url.split('/')[1]}Active` :
        'homeActive'
        )
    }

    location.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      location.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <header className={styles.header}>

      <h4 className={
        isLogo ? 
        `${styles.logo}` : 
        location.pathname !== '/' ? 
        `${styles.logo} ${styles.homePage}` : 
        `${styles.logo}`
      } 
      onClick={toggleLogo}>
    
      <Link href='/'>          
          <a className={
            isLogo ? 
            `${styles['myname']}` : 
            location.pathname !== '/' ? 
            `${styles['myname']} ${styles['homePage']}` : 
            `${styles['myname']}`
          }
          onClick={(e)=> delayAndGo(e, '/')}>
          Mostafa Tawfik
          </a>
        </Link> 
      </h4>

        <div className={styles.navbar}>
          <ul>
            <Link href='/'><div 
            className={
              navbarActive === 'homeActive' ? 
              `${styles['navitem']} ${styles['active']}`:
              `${styles['navitem']}`}
            ><span>Home</span><span>Home</span></div></Link>

            <Link href='/about'><div 
            className={
              navbarActive === 'aboutActive' ? 
              `${styles['navitem']} ${styles['active']}`:
              `${styles['navitem']}`}
            ><span>About</span><span>About</span></div></Link>

            <Link href='/portfolio'><div 
            className={
              navbarActive === 'portfolioActive' ? 
              `${styles['navitem']} ${styles['active']}`:
              `${styles['navitem']}`}
            ><span>Portfolio</span><span>Portfolio</span></div></Link>

            <Link href='/contact'><div 
            className={
              navbarActive === 'contactActive' ? 
              `${styles['navitem']} ${styles['active']}`:
              `${styles['navitem']}`}
            ><span>contact</span><span>contact</span></div></Link>

          </ul>
        </div>

        <div className={styles.navbarMobile}>

          <Link href={`${switchPage.prevPage}`}>          
            <img src='../../images/previous.png' className={styles.before} width="35px" alt="previous page button"></img>
          </Link> 

          <button 
            className={
              props.isActive.menuActive ? 
              `${styles.toggle} ${styles.active}` : 
              `${styles.toggle}`} 
              onClick={props.toggle}
              ></button>

          <Link href={`${switchPage.nextPage}`}>          
            <img src='../../images/next.png' className={styles.next} width="35px" alt="next page button"></img>
          </Link>         

        </div>

    </header>;
}
