import React from 'react'
import styles from '../styles/Project.module.scss'

function ProjectOverview({showProject}) {
  return (
    <section className={styles['project-overview']}>

      <h1 className={styles['project-overview-title']}>
        Project Overview
      </h1>
      
      {showProject.overview?.map?.((over,i) => (
        <div key={i} className={styles['project-overview-section']}>

          <p>{over.section.desc}</p>
          <img src={over.section.img} alt="project section" />

        </div>
        )) || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores doloribus vel dolore libero repellendus adipisci culpa. Odit sapiente nulla eligendi eius deleniti. Voluptatibus harum sint ea reiciendis earum ut corporis eos eum expedita sapiente. Explicabo corrupti perferendis deserunt obcaecati doloremque?'
      } 
    </section>
  )
}

export default ProjectOverview