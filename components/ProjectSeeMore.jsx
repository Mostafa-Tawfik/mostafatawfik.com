import React from 'react'
import styles from '../styles/Project.module.scss'

function ProjectSeeMore({ showProject }) {
  return (
    <section className={styles['seemore']}>
      <h1 className={styles['seemore-title']}>
        See More
      </h1>
      <div className={styles['project-btn-holder']}>
        <button onClick={() => {
        window.open(showProject.url)}}  className={styles['project-btn']}>
          LIVE PREVIEW
        </button>
        <button onClick={() => {
        window.open(showProject.git)}} className={styles['project-btn']}>
          CODE LINK
        </button>
      </div>
    </section>
  )
}

export default ProjectSeeMore