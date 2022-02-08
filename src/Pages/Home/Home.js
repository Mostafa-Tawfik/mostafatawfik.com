import React from 'react';
import Header from '../../components/Header';
import Main from './components/Main';
import SocialLinks from '../../components/SocialLinks';
import { motion } from 'framer-motion';
import About from '../About/About';
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'

export default function Home(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, y: [100, 0], transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  return <div>
    <section>
      <section className="main">
      
        <Header {...props}/>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
          <Main />
          <div className='downarrow'>&darr;</div>

          <div className='divider' id='services'>
            <h2 className='divider-section'>SERVICES</h2>
            <hr></hr>
          </div>

          <Services />

          <div className='divider' id='about'>
            <h2 className='divider-section'>ABOUT ME</h2>
            <hr></hr>
          </div>

          <About/>

          <div className='divider' id='portfolio'>
            <h2 className='divider-section'>PORTFOLIO</h2>
            <hr></hr>
          </div>

          <Portfolio />

          {/* <SocialLinks /> */}
          <SocialLinks />
        </motion.div>
      </section>
    </section>
  </div>;
}
