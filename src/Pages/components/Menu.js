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
          to={'/About'}
          className="menuLi"
          >About Me</Link>
        </li>
        <li>
        <Link
          to={'/Portfolio'}
          className="menuLi"
          >Portfolio</Link>
        </li>
        {/* <!-- <li><a href="#">Contact</a></li> -->
        <!-- <li><a href="#">Credits</a></li> --> */}
      </ul>
    </div>
  </div>;
}
