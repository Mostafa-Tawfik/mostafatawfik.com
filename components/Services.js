import React from 'react';
import AppData from '../AppData';
import DisplayLottie from '../components/DisplayLottie';
import DESIGN from '../public/Lottie/DESIGN.json'
import { Icon } from '@iconify/react'
import styles from '../styles/About.module.scss'

export default function Services(props) {

  return <section className={styles.services}>

    <h1 className={styles['services-title']}>What can i do</h1>
    <p className={styles['Services-desc']}>In the world of mass production, unique quality has an increasing value. Overtake your rivals, stand out from the crowd and take the advantage of the UX based minimalist design with an effiecnt, high-performance web applications.</p>
    <div className={styles['lottie-holder']}>
      <DisplayLottie lottiePath={DESIGN} height={400} />
    </div>
    <section className={styles['services-cards-holder']}>
      {AppData.services.map(serv => {
        return (
          <div key={serv.id} className={styles['services-card']}>
            <Icon icon={serv.icon} style={{fontSize: '80px'}} />
            <h1 className={styles['services-card-title']}>
              {serv.name}
            </h1>
            <p className={styles['services-card-desc']}>
              {serv.desc}
            </p>
          </div>
        )
      })}
    </section>
        
  </section>;
}
