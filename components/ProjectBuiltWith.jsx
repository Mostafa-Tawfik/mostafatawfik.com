import React from 'react'
import AppData from '../AppData'
import styles from '../styles/Project.module.scss'
import { Icon } from '@iconify/react'

function ProjectBuiltWith({ showProject }) {

  const builtStack = showProject.builtWith && AppData.myStack.filter(f => showProject.builtWith.includes(f.name)).map((s,i) => {
    return (
      <div className={styles['stack']} key={i}>
        <Icon className={styles['icon']} icon={s.url} width={50} />
        <p>{s.name}</p>
      </div>
    )
  })

  return (
    <section className={styles['builtwith']}>
      <h1 className={styles['builtwith-title']}>
        Built With
      </h1>
      <div className={styles['builtwith-stack']}>
        {builtStack}
      </div>
    </section>
  )
}

export default ProjectBuiltWith