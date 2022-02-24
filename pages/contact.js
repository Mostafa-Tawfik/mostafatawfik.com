import React from 'react'
import styles from '../styles/Contact.module.scss'
import { motion } from 'framer-motion';

function contact() {

  const [contact, setContact] = React.useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  function handleMeme(event){
    event.preventDefault()

    const {name, value} = event.target
    setContact(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  return (

    <motion.div
    initial='initial'
    animate='animate'
    exit='exit'
    variants={pageMotion}
    >
      <form target="_blank" action="https://formsubmit.co/e613dcfd489c3e1fc747cbc6db75ea83" method="POST" className={styles['form']}>
        <div className={styles["form-group"]}>
          <div className={styles["form-row"]}>
            <div className={styles["col"]}>
              <input 
                type="text" 
                name="fullName" 
                className={styles["form-control"]} 
                placeholder="Full Name" required
                value={contact.fullName}
                onChange={handleMeme}>
              </input>
            </div>
            <div className={styles["col"]}>
              <input 
              type="email" 
              name="email" 
              className={styles["form-control"]} 
              placeholder="Email Address" required
              value={contact.email}
              onChange={handleMeme}>
              </input>
            </div>
            <div className={styles["col"]}>
              <input 
              type="subject" 
              name="subject" 
              className={styles["form-control"]} 
              placeholder="Subject" required
              value={contact.subject}
              onChange={handleMeme}>
              </input>
            </div>
            <input type="hidden" name="_subject" value={contact.subject}></input>
          </div>
        </div>
        <div className={styles["form-group"]}>
          <textarea 
          placeholder="Your Message" 
          className={styles["message-box"]} 
          name="message" rows="10" required>
          </textarea>
        </div>
        <button type="submit" className={styles["submit-btn"]}>Send</button>
      </form>
    </motion.div>
  )
}

export default contact