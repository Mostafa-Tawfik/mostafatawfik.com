import styles from '../styles/Home.module.scss'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { Fragment } from 'react';
import Head from 'next/head';

export default function Home() {
  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  return (
    <Fragment >
      
      <Head>
        <title>Mostafa Tawfik</title>
        <meta name="description" content="I'm Mostafa Tawfik a Front-End web developer and UI/UX designer with experience in building and designing static and dynamic responsive websites." />
      </Head>

      <section className={styles.main}>
      
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
          <div className={styles['home-section']}>
            <img className={styles.myLogo} alt='myLogo' src='../../images/logo.jpg'></img>
            <div className={styles.text}>
              <h2>Front-End Developer</h2>
              <h3>UX/UI Designer</h3>
              <p>Front-End web developer and UI/UX designer with experience in
                  building and designing stunning,
                  simple, and fully responsive static and dynamic websites, I
                  build with CMS and build from scratch,
                  make and modify UI designs to enhance the brand identity.</p>
              <Link href='/about' className={styles.more}>More about
                  me</Link>
              <Link href='/portfolio' className={styles.port}>Recent
                  projects</Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Fragment>
  )
}
