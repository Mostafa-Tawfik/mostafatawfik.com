import React from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import DisplayLottie from '../components/DisplayLottie';
import development from '../Lottie/development.json'
import { motion } from 'framer-motion';

export default function About(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }
  }
  return <div>
    <Header {...props}/>
    <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
      <section className='about-header'>
        <div className='about-header-desc'>
          <h1>Hi I'm Mostafa</h1>
          <p>A Frontend web developer and UI/UX designer well-versed in Scrum and Agile with experience in building and designing static and dynamic responsive web applications with JavaScript / React / SASS / Tailwind and other libraries like Framer Motion and Lottie.</p>
          <button onClick={() => {
            window.open("http://google.com", "_blank")}} className="myResume">My Resume</button>
        </div>
        <DisplayLottie lottiePath= {development} />
      </section>
      <section className='about-stack'>

      </section>
    <SocialLinks />
    </motion.div>
  </div>;
}
