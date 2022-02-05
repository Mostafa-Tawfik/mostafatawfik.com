import React from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import { motion } from 'framer-motion';

export default function Portfolio(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: [0, 80, 0], transition: { duration: 1 } },
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

    </motion.div>
    <SocialLinks/>
  </div>;
}
