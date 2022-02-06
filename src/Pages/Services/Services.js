import React from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import AppData from '../../AppData';
import { motion } from 'framer-motion';
import DisplayLottie from '../components/DisplayLottie';
import DESIGN from '../Lottie/DESIGN.json'
import { Icon } from '@iconify/react'

export default function Services(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: [0, 80, 0], transition: { duration: 3 } },
    exit: { opacity: 0, x: 0, transition: { duration: 3 } }
  }

  return <div>
    <Header {...props}/>
    <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
        <section className='services'>
          <h1 className='services-title'>Just Trust In Quality</h1>
          <p className='Services-desc'>In the world of mass production, unique quality has an increasing value. Overtake your rivals, stand out from the crowd and take the advantage of the UX based minimalist design.</p>
          <div className='lottie-holder'>
            <DisplayLottie lottiePath={DESIGN} height={400} />
          </div>
          <section className='services-cards-holder'>
            {AppData.services.map(serv => {
              return (
                <div key={serv.id} className='services-card'>
                  <Icon icon={serv.icon} style={{fontSize: '80px'}} />
                  <h1 className='services-card-title'>
                    {serv.name}
                  </h1>
                  <p className='services-card-desc'>
                    {serv.desc}
                  </p>
                </div>
              )
            })}
          </section>
        </section>
      </motion.div>
    <SocialLinks />
  </div>;
}
