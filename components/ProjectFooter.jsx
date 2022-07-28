import React, { Fragment } from 'react'
import Link from 'next/link';
import styles from '../styles/Project.module.scss'
import AppData from '../AppData';

function ProjectFooter({showProject}) {
  return (
    <footer className={styles['project-footer']}>

      {AppData.Projects.map(pro => {
        if (showProject.id === pro.id)
        return (

          <Fragment key={pro.id}>

            {AppData.Projects.filter(pro => pro.id === showProject.id -1).map(p => {
              return (
                <Link href={'/portfolio/' + p.path} key={p.id}> 
                  <div className={styles['project-footer_btn-container']}>
                    <button className={styles['project-footer_btn']}>&laquo;</button>
                    <div>
                      <h6>{p.title}</h6>
                      <p>Previous Project</p>
                    </div>
                  </div>
                </Link>
              )
            })}

            {AppData.Projects.filter(pro => pro.id === showProject.id +1).map(p => {
              return (
                <Link href={'/portfolio/' + p.path} key={p.id}> 
                  <div className={styles['project-footer_btn-container']}>
                    <div>
                      <h6>{p.title}</h6>
                      <p>Next Project</p>
                    </div>
                    <button className={styles['project-footer_btn']}>&raquo;</button>
                  </div>
                </Link>
              )
            })}

          </Fragment>
        )
      })}

    </footer>
  )
}

export default ProjectFooter