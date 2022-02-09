import React from 'react';
import { Link } from 'react-router-dom'

export default function Menu() {
  
  return <div>
    <div className='menu'>
      <ul>
        <li>
        <Link
          to={'/'}
          className="menuLi"
          >Home</Link>
        </li>
        <li>
          <Link
          to={'/services'}
          className="menuLi"
          >Services</Link>
        </li>
        <li>
          <Link
          to={'/about'}
          className="menuLi"
          >About Me</Link>
        </li>
        <li>
        <Link
          to={'/portfolio'}
          className="menuLi"
          >Portfolio</Link>
        </li>
      </ul>
    </div>
  </div>;
}
