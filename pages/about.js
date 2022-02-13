import React from 'react';
import DisplayLottie from '../components/DisplayLottie';
import development from '../public/Lottie/development.json'
import { motion } from 'framer-motion';
import styles from '../styles/About.module.scss'
import Education from '../components/Education';
import MyStack from '../components/MyStack';


export default function about() {
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
        <h2 className='divider-section'>About Me</h2>
        <hr></hr>
      </div>
      
      <section className={styles['about-layout']} id='about'>
        <section className={styles['about-header']}>
        <div className={styles['about-header-desc']}>
          <h1>Hi I'm Mostafa</h1>
          <p>A Frontend web developer and UI/UX designer well-versed in Scrum and Agile with experience in building and designing static and dynamic responsive web applications with JavaScript / React / SASS / Tailwind and other libraries like Framer Motion and Lottie.</p>
          <button onClick={() => {
            window.open("../Mostafa-Tawfik-Resume.pdf", "_blank")}} className={styles.myResume}>My Resume</button>
        </div>
          <DisplayLottie lottiePath= {development} height={400} />
        </section>
        
        <MyStack />
        <Education />
      </section>

    </motion.div>
  </div>;
}
