import React from 'react'
import { useParams } from 'react-router-dom'
import AppData from '../../AppData'
import Header from '../../components/Header'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion';

export default function Project(props) {

  const pageMotion= {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, x: 0, transition: { duration: 2 } }
  }

  const params = useParams()

  const [showProject, setShowProject] = React.useState([''])

  React.useEffect(()=>{
    AppData.Projects.map(pro =>
      pro.path === params.projectTitle ?
        setShowProject(pro) : ''
      )
    },[params])

    const builtStack = showProject.builtWith && AppData.myStack.filter(f => showProject.builtWith.includes(f.name)).map((s,i) => {
      return (
          <Icon className='icon' key={i} icon={s.url} style={{fontSize: '80px'}} />
      )
    })

    console.log(showProject.builtWith)

  return (
    <div>
      <Header {...props}/>
      <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          variants={pageMotion}
        >
      <section className='project'>
      <img className='project-hero2' src='../../images/raw3.png' alt='hero'></img>

        <section className='project-title'>
          <h1>{showProject.title}</h1>
          <p>{showProject.desc}</p>
        </section>

        <section className='project-details'>
          <div className='project-preview'>
            <img src='../../images/mac-mockup.png' alt='preview' className='project-laptop'></img>
            <div className="project-image" style={{backgroundImage:`url(${showProject.image})`}}></div>
            <div className='project-preview-mobile'>
              <img src='../../images/iphone.png' alt='preview' className='project-mobile'></img>
              <div className="project-image-mobile" style={{backgroundImage:`url(${showProject.imageMobile})`}}></div>
            </div>
          </div>
          <section className='project-overview'>
            <h1 className='project-overview-title'>Project Overview</h1>
            <p className='project-overview-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut provident blanditiis, deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia laborum corrupti ullam rem?</p>
          </section>

          <section className='builtwith'>
            <h1 className='builtwith-title'>Built With</h1>
            <div className='builtwith-stack'>
              {builtStack}
            </div>
          </section>

          <section className='seemore'>
            <h1 className='seemore-title'>See More</h1>
            <div className='project-btn-holder'>
              <button onClick={() => {
              window.open(showProject.url)}}  className='project-btn'>LIVE PREVIEW</button>
              <button onClick={() => {
              window.open(showProject.git)}} className='project-btn'>CODE LINK</button>
            </div>
          </section>
        </section>
      </section>
      </motion.div>
    </div>
  )
}
