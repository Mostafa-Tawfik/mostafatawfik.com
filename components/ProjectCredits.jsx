import React from 'react'
import styles from '../styles/components/ProjectCredits.module.scss'
import Link from 'next/link'

function ProjectCredits({ showProject }) {

  console.log(showProject);

  return (
     <article className={styles['project-credits-container']}>

      {showProject.credits && 
      <h1>
        Contributors
      </h1>
      }

      <div className={styles['project-credits']}>
        {showProject.credits?.map?.((dev,i) => (
          <a href={dev.github} target={"_blank"} rel={"noreferrer"} key={i} className={styles['project-credits-section']}>

            <img src={dev.img} alt="developer" />
            <p>{dev.name}</p>
            <p>{dev.role}</p>

          </a>
          )) || ''
        }
      </div>
      
    </article>
  )
}

export default ProjectCredits