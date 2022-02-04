import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SocialLinks from '../components/SocialLinks';

export default function Portfolio(props) {
  return <div>
    <Header {...props}/>
    <SocialLinks/>
  </div>;
}
