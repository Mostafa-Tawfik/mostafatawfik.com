import React from 'react'
import { useRouter } from 'next/router'
import AppData from '../../AppData'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';
import styles from '../../styles/Project.module.scss'

export default function Project() {

  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  const params = useRouter()

  const [showProject, setShowProject] = React.useState([''])

  React.useEffect(()=>{
    AppData.Projects.map(pro =>
      pro.path === params.query.projectpath?
        setShowProject(pro) : ''
      )
    },[params])

    const builtStack = showProject.builtWith && AppData.myStack.filter(f => showProject.builtWith.includes(f.name)).map((s,i) => {
      return (
          <Icon className={styles['icon']} key={i} icon={s.url} style={{fontSize: '80px'}} />
      )
    })

  return (
    <div>
      <motion.div
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
          <div className={styles['project-preview']}>
            <img src='../../images/mac-mockup.png' alt='preview' className={styles['project-laptop']}></img>
            <div className={styles["project-image"]} style={{backgroundImage:`url(${showProject.image})`}}></div>
            <div className={styles['project-preview-mobile']}>
              <img src='../../images/iphone.png' alt='preview' className={styles['project-mobile']}></img>
              <div className={styles["project-image-mobile"]} style={{backgroundImage:`url(${showProject.imageMobile})`}}></div>
            </div>
          </div>
          <section className={styles['project-overview']}>
            <h1 className={styles['project-overview-title']}>Project Overview</h1>
            <p className={styles['project-overview-desc']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem?</p>
          </section>

          <section className={styles['builtwith']}>
            <h1 className={styles['builtwith-title']}>Built With</h1>
            <div className={styles['builtwith-stack']}>
              {builtStack}
            </div>
          </section>

          <section className={styles['seemore']}>
            <h1 className={styles['seemore-title']}>See More</h1>
            <div className={styles['project-btn-holder']}>
              <button onClick={() => {
              window.open(showProject.url)}}  className={styles['project-btn']}>LIVE PREVIEW</button>
              <button onClick={() => {
              window.open(showProject.git)}} className={styles['project-btn']}>CODE LINK</button>
            </div>
          </section>
        </section>
      </section>
      </motion.div>
    </div>
  )
}
