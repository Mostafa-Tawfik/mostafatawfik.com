import React from 'react';
import DisplayLottie from '../components/DisplayLottie';
import development from '../public/Lottie/development.json'
import { motion } from 'framer-motion';
import styles from '../styles/About.module.scss'
import Education from '../components/Education';
import MyStack from '../components/MyStack';
import Services from '../components/Services';
import Head from 'next/head';


export default function about() {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }
  return <div>
    <Head>
      <title>About Me</title>
      <meta name="description" content="More details about me, what i can do, my expertises, education, etc ..." />
    </Head>

    <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
      <div className='divider'>
        <h1 className='divider-section'>About Me</h1>
        <hr></hr>
      </div>
      
      <section className={styles['about-layout']} id='about'>
        <section className={styles['about-header']}>
        <div className={styles['about-header-desc']}>
          <h1>Hi .. I'm Mostafa</h1>
          <p>A Front-End web developer and UI/UX designer well-versed in Scrum and Agile with experience in building and designing static and dynamic responsive web applications with JavaScript / React / Next.js / SASS / Tailwind and other libraries like Framer Motion and Lottie etc ... </p>
          <br></br>
          <p>I build meaningful, usable yet joyful user experiences with a user-centered design approach.</p>
          <br></br>
          <p>Enhancing online content in order to improve the quality and quantity of website traffic and improve the website's position in search results pages.</p> 
          <button onClick={() => {
            window.open("../Mostafa-Tawfik-Resume.pdf", "_blank")}} className={styles.myResume}>My Resume</button>
        </div>
          <DisplayLottie lottiePath= {development} height={400} />
        </section>
        
        <Services />
        <MyStack />
        <Education />
      </section>

    </motion.div>
  </div>;
}
