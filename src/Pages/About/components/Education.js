import React from 'react';
import { motion } from 'framer-motion';
import AppData from '../../../AppData';

export default function Education() {
  return <section className='education'>
    <div className='education-title'>
      <h1>Education</h1>
    </div>
    <section className='education-card-holder'>
      {AppData.education.map(edu => {
        return (
          <motion.div key={edu.id} className='education-card'>
            <h2 className='education-card-title'>{edu.title}</h2>
            <h5 className='education-card-title-desc'>{edu.location}</h5>
            <h6 className='education-card-title-desc'>{edu.field}</h6>
            <h6 className='education-card-dates'>{edu.startDate} -{'>'} {edu.endDate}</h6>
            <p className='education-card-desc'>{edu.desc}</p>
            <div className='education-card-btn-holder'>
              <button onClick={() => {
              window.open(edu.more)}} className="edu-btn more">See more</button>
              {edu.credential && <button onClick={() => {
              window.open(edu.credential)}} className="edu-btn cred">See credential</button>}
            </div>
            
          </motion.div>
        )
      })}

    </section>
  </section>;
}
