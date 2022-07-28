import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import AppData from '../../AppData'
import { motion } from 'framer-motion';
import styles from '../../styles/Project.module.scss'
import ProjectFooter from '../../components/ProjectFooter';
import ProjectOverview from '../../components/ProjectOverview';
import ProjectPreview from '../../components/ProjectPreview';
import ProjectBuiltWith from '../../components/ProjectBuiltWith';
import ProjectSeeMore from '../../components/ProjectSeeMore';

export default function Project() {

  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  const params = useRouter()

  const [showProject, setShowProject] = useState([''])

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: 'smooth'})

    AppData.Projects.map(pro =>
      pro.path === params.query.projectpath?
        setShowProject(pro) : ''
    )
  },[params.query.projectpath])

  return (
    <motion.main
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}
    >
      <section className={styles['project']}>

        <section className={styles['project-title']}>
          <h1>{showProject.title}</h1>
          <p>{showProject.desc}</p>
        </section>

        <section className={styles['project-details']}>

          <ProjectPreview showProject={showProject} />

          <ProjectBuiltWith showProject={showProject} />

          <ProjectOverview showProject={showProject}/>

          <ProjectSeeMore showProject={showProject} />

          <ProjectFooter showProject={showProject}/>

        </section>
      </section>
    </motion.main>
  )
}
