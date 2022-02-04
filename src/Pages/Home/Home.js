import React from 'react';
import Header from '../components/Header';
import Main from './components/Main';
import Menu from '../components/Menu';
import SocialLinks from './components/SocialLinksHorizontal';
import { motion } from 'framer-motion';

export default function Home(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 0, transition: { duration: 1 } }
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
          <SocialLinks />
        </motion.div>
      </section>
    </section>
  </div>;
}
