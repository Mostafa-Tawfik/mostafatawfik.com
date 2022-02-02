import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Portfolio(props) {
  return <div>
    <Header {...props}/>
    <Menu />
  </div>;
}
