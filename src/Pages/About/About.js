import React from 'react';
import Header from '../../components/Header';
import DisplayLottie from '../../components/DisplayLottie';
import development from '../Lottie/development.json'
import { motion } from 'framer-motion';
import Education from './components/Education';
import MyStack from './components/MyStack';


export default function About(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, y: [100, 0], transition: { duration: 3 } },
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
      <div className='divider'>
        <h2 className='divider-section'>About Me</h2>
        <hr></hr>
      </div>
      
      <section className='about-layout' id='about'>
        <section className='about-header'>
        <div className='about-header-desc'>
          <h1>Hi I'm Mostafa</h1>
          <p>A Frontend web developer and UI/UX designer well-versed in Scrum and Agile with experience in building and designing static and dynamic responsive web applications with JavaScript / React / SASS / Tailwind and other libraries like Framer Motion and Lottie.</p>
          <button onClick={() => {
            window.open("../Mostafa-Tawfik-Resume.pdf", "_blank")}} className="myResume">My Resume</button>
        </div>
          <DisplayLottie lottiePath= {development} height={400} />
        </section>
        
        <MyStack />
        <Education />
      </section>

    </motion.div>
  </div>;
}
