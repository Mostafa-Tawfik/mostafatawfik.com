import React from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import { motion } from 'framer-motion';
import AppData from '../../AppData';

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
        <div className="card-section">
          {AppData.Projects.map(project => {
            return (
              <div 
              className='card-holder' 
              key={project.id}>
                <h2 className="card-title">{project.title}</h2>
                <div className="card mr"  style={{backgroundImage: `url(${project.image})`}}>
                  <div className="card-content">
                    {/* <p className="card-body">{project.desc}</p> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

    </motion.div>
    <SocialLinks/>
  </div>;
}
