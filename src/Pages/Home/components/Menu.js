import React from 'react';

export default function Menu() {
  
  return <div>
    <div className='menu'>
      <ul>
        <li>
          <a 
            href="index.html" 
            className="menuLi">Home
          </a>
        </li>
        <li>
          <a 
            href="about.html" 
            className="menuLi">
              About Me
          </a>
        </li>
        <li>
          <a 
            href="portfolio.html"
            className="menuLi">
              Portfolio
          </a>
        </li>
        {/* <!-- <li><a href="#">Contact</a></li> -->
        <!-- <li><a href="#">Credits</a></li> --> */}
      </ul>
    </div>
  </div>;
}
