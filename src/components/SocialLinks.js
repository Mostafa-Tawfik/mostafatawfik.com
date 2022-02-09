import React from 'react';

export default function SocialLinks(props) {
  return <div>
    <ul className={`social vertical ${props.isActive.menuActive ? 'active' : ''}`}>
      <li><a 
          href="https://twitter.com/Mostafa__Tawfik" 
          target="_blank "
          rel="noreferrer">
            <img 
              src="images/twitter.png"
              alt="twitter logo">
            </img>
          </a>
      </li>
      <li><a 
          href="https://dribbble.com/Mostafa_Tawfik" 
          target="_blank"
          rel="noreferrer">
            <img 
              src="images/dribbble.png"
              alt="dribbble logo">
            </img>
          </a>
      </li>
      <li><a 
            href="https://www.behance.net/Mostafa_Tawfik" target="_blank"
            rel="noreferrer">
              <img 
                src="images/behance.png"
                alt="behance logo">
              </img>
          </a>
      </li>
      <li><a 
            href="https://github.com/Mostafa-Tawfik" 
            target="_blank"
            rel="noreferrer">
              <img 
                src="images/github.png"
                alt="github logo">
              </img>
          </a>
      </li>
      <li><a 
            href="https://www.linkedin.com/in/m8ustafa-tawfik/"
            target="_blank" 
            rel="noreferrer">
              <img 
                src="images/linkedin.png"
                alt="linkedin logo">
              </img>
          </a>
        </li>
    </ul>
  </div>;
}
