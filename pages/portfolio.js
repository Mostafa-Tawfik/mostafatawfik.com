import React from 'react';
import { motion } from 'framer-motion';
import AppData from '../AppData';
import styles from '../styles/Portfolio.module.scss'
// import { Link } from 'next/link';

export default function portfolio() {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  return <div>
    <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
        <div className='divider'>
          <h2 className='divider-section'>PORTFOLIO</h2>
          <hr></hr>
        </div>
        <div className={styles["card-section"]}>
          {AppData.Projects.map(project => {
            return (
              // <Link href={`/${project.path}`} key={project.id}>
                <div className={styles['card-holder']} key={project.id}>
                  <div className={styles['card-preview']}>
                    <img src='../../images/mac-mockup.png' alt='preview' className='card-laptop'></img>
                    <div className={styles["card-image"]} style={{backgroundImage:`url(${project.image})`}}></div>
                    <div className={styles['card-preview-mobile']}>
                      <img src='../../images/iphone.png' alt='preview' className={styles['card-mobile']}></img>
                      <div className={styles["card-image-mobile"]} style={{backgroundImage:`url(${project.imageMobile})`}}></div>
                    </div>
                  </div>
                  <div className={styles["card-content"]}>
                    <h2 className={styles["card-title"]}>{project.title}</h2>
                    <p className={styles["card-desc"]}>{project.desc}</p>
                  </div>
                </div>
              // </Link>
            )
          })}
        </div>

    </motion.div>
  </div>;
}
