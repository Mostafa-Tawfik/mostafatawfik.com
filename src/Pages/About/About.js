import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SocialLinks from '../components/SocialLinks';
import DisplayLottie from '../components/DisplayLottie';
import development from '../Lottie/development.json'

export default function About(props) {

  return <div>
    <Header {...props}/>
    <div className='about-header'>
      <div className='about-header-desc'>
        <h1>Hi I'm Mostafa</h1>
        <p>A Frontend web developer and UI/UX designer well-versed in Scrum and Agile with experience in building and designing static and dynamic responsive web applications with JavaScript / React / SASS / Tailwind and other libraries like Framer Motion and Lottie.</p>
      </div>
      <DisplayLottie lottiePath= {development} />
    </div>
    <SocialLinks />
  </div>;
}
