import React from 'react'
import '../styles/globals.scss'
import Head from 'next/head'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence } from "framer-motion"
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = React.useState({
    menuActive: false,
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

  // switch pages animations
  const location = useRouter()
  
  return (
    <Fragment>
      <Head>
        <title>Mostafa Tawfik</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="I'm Mostafa Tawfik a Front-End web developer and UI/UX designer with experience in building and designing static and dynamic responsive websites." />
        <meta property={'og:title'} content='Mostafa Tawfik'/>
        <meta property='og:image' content='https://i.ibb.co/pWbjdQd/mtL.png'/>
        <meta property='og:description' content="I'm Mostafa Tawfik a Front-End web developer and UI/UX designer with experience in building and designing static and dynamic responsive websites."/>
        <meta property='og:url' content='https://www.mostafatawfik.com/'/>
        <meta property='og:image:width' content='1802' />
        <meta property='og:image:height' content='1122' />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&family=Mrs+Saint+Delafield&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Redressed&display=swap" rel="stylesheet"></link>
      </Head>

      <section className='app'>

        <Header toggle={toggleMenu} isActive={isActive}/>

        <AnimatePresence exitBeforeEnter>

          <section 
          className={`showcase ${location.pathname.split('/')[1].   toLowerCase()} ${isActive.menuActive ? 'active' : ''}`}>  

            <img className="bg" src='https://i.ibb.co/y4rTdR6/raw3.webp' alt="keyboard background"></img>
            <Component {...pageProps} />

          <Footer />
          </section>
        </AnimatePresence>
        <SocialLinks isActive={isActive}/>
        <Menu toggle={toggleMenu}/>
      </section>

    </Fragment>
  )
}

export default MyApp
