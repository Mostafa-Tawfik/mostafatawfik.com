import React, { Fragment } from 'react'
import stack from '../public/Lottie/stack.json'
import AppData from '../AppData'
import { Icon } from '@iconify/react'
import DisplayLottie from '../components/DisplayLottie'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.scss'

export default function MyStack() {
  return <section className={styles['about-stack']}>
    
    <h1 className={styles['stack-title']}>Development Stack</h1>
    <div className={styles['stack-holder']}>
      <DisplayLottie lottiePath= {stack} className={styles['stack-lottie']}/>
      <div className={styles['stackSet-holder']}>
        {AppData.myStack.map((stack, i)=> {
          return (
            <Fragment key={stack.name}>
              <motion.div className={styles.stackSet}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9}}
                transition={{ duration: 0.3}}>
                <Icon icon={stack.url} style={{width: '80px'}} width={60}/>
                <h5>{stack.name}</h5>
              </motion.div>
            </Fragment>
          )
        })}
      </div>
    </div>

  </section>;
}
