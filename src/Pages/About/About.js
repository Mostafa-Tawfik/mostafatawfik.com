import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SocialLinks from '../components/SocialLinks';
import DisplayLottie from '../components/DisplayLottie';
import development from '../Lottie/development.json'

export default function About(props) {

  return <div>
    <Header {...props}/>
    <Menu />
    <SocialLinks />
    <DisplayLottie lottiePath= {development} />
  </div>;
}
