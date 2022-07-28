import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import AppData from '../../AppData'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';
import styles from '../../styles/Project.module.scss'
import Link from 'next/link';

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
        <div className={styles['stack']} key={i}>
          <Icon className={styles['icon']} icon={s.url} width={50} />
          <p>{s.name}</p>
        </div>
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

          <section className={styles['builtwith']}>
            <h1 className={styles['builtwith-title']}>Built With</h1>
            <div className={styles['builtwith-stack']}>
              {builtStack}
            </div>
          </section>

          <section className={styles['project-overview']}>
            <h1 className={styles['project-overview-title']}>Project Overview</h1>
            {showProject.overview?.map?.((over,i) => (
              <div key={i} className={styles['project-overview-section']}>
                <p>{over.section.desc}</p>
                <img src={over.section.img} alt="project section" />
              </div>
            )) || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores doloribus vel dolore libero repellendus adipisci culpa. Odit sapiente nulla eligendi eius deleniti. Voluptatibus harum sint ea reiciendis earum ut corporis eos eum expedita sapiente. Explicabo corrupti perferendis deserunt obcaecati doloremque?'} 
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

        </section>
      </section>
      </motion.div>
    </div>
  )
}
