import React from 'react';
import Header from '../../components/Header';
import Main from './components/Main';
import { motion } from 'framer-motion';

export default function Home(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
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

          {/* <SocialLinks /> */}
        </motion.div>
      </section>
    </section>
  </div>;
}
