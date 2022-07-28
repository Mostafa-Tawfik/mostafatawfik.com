import React from 'react'
import styles from '../styles/Project.module.scss'

function ProjectPreview({showProject}) {
  return (
    <section className={styles['project-preview']}>

      <img src='../../images/mac-mockup.png' alt='preview' className={styles['project-laptop']}/>

      <div className={styles["project-image"]} style={{backgroundImage:`url(${showProject.image})`}}>
      </div>
      
      <div className={styles['project-preview-mobile']}>

        <img src='../../images/iphone.png' alt='preview' className={styles['project-mobile']}/>

        <div className={styles["project-image-mobile"]} style={{backgroundImage:`url(${showProject.imageMobile})`}}>
        </div>

      </div>
    </section>
  )
}

export default ProjectPreview