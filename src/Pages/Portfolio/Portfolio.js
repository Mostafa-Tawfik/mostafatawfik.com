import React from 'react';
import Header from '../../components/Header';
import { motion } from 'framer-motion';
import AppData from '../../AppData';
import { Link } from 'react-router-dom';

export default function Portfolio(props) {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, y: [100, 0], transition: { duration: 3 } },
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
        <div className='divider'>
          <h2 className='divider-section'>PORTFOLIO</h2>
          <hr></hr>
        </div>
        <div className="card-section">
          {AppData.Projects.map(project => {
            return (
              <Link to={`/${project.path}`} key={project.id}>
                <div className='card-holder' key={project.id}>
                  <div className='card-preview'>
                    <img src='../../images/mac-mockup.png' alt='preview' className='card-laptop'></img>
                    <div className="card-image" style={{backgroundImage:`url(${project.image})`}}></div>
                    <div className='card-preview-mobile'>
                      <img src='../../images/iphone.png' alt='preview' className='card-mobile'></img>
                      <div className="card-image-mobile" style={{backgroundImage:`url(${project.imageMobile})`}}></div>
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-desc">{project.desc}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

    </motion.div>
  </div>;
}
