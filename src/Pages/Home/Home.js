import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import SocialLinks from './components/SocialLinks';

export default function Home(props) {
  return <div>
    <section>
      <section className="main">
        <Header {...props}/>
        <Main />
        <SocialLinks />
      </section>
      <Menu />
    </section>
  </div>;
}
