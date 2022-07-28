import React from 'react';
import { motion } from 'framer-motion';
import AppData from '../AppData';
import styles from '../styles/About.module.scss'

export default function Education() {
  return <section className={styles.education}>
    
    <div className={styles['education-title']}>
      <h1>Education</h1>
    </div>
    <section className={styles['education-card-holder']}>
      {AppData.education.map(edu => {
        return (
          <motion.div key={edu.id} className={styles['education-card']}>
            <h2 className={styles['education-card-title']}>{edu.title}</h2>
            <h5 className={styles['education-card-title-desc']}>{edu.location}</h5>
            <h6 className={styles['education-card-title-desc']}>{edu.field}</h6>
            <h6 className={styles['education-card-dates']}>{edu.startDate} -{'>'} {edu.endDate}</h6>
            <p className={styles['education-card-desc']}>{edu.desc}</p>
            <div className={styles['education-card-btn-holder']}>
              <button onClick={() => {
              window.open(edu.more)}} className={styles["edu-btn"]}>See more</button>
              {edu.credential && <button onClick={() => {
              window.open(edu.credential)}} className={styles["edu-btn"]}>See credential</button>}
            </div>
            
          </motion.div>
        )
      })}

    </section>
  </section>;
}
