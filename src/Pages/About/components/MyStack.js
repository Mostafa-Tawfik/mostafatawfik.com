import React, { Fragment } from 'react'
import stack from '../../Lottie/stack.json'
import AppData from '../../../AppData'
import { Icon } from '@iconify/react'
import DisplayLottie from '../../components/DisplayLottie'
import { motion } from 'framer-motion'

export default function MyStack() {
  return <section className='about-stack'>
    <h1 className='stack-title'>Development Stack</h1>
    <div className='stack-holder'>
      <DisplayLottie lottiePath= {stack} className='stack-lottie'/>
      <div className='stackSet-holder'>
        {AppData.myStack.map((stack, i)=> {
          return (
            <Fragment key={stack.name}>
              <motion.div className='stackSet'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, borderRadius: "100%" }}>
                <Icon icon={stack.url} style={{fontSize: '80px'}} />
                <h2>{stack.name}</h2>
              </motion.div>
            </Fragment>
          )
        })}
      </div>
    </div>

  </section>;
}
