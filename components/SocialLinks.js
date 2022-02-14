import React from 'react';
import styles from '../styles/components/Social.module.scss'
import { useRouter } from 'next/router';

export default function SocialLinks(props) {
  const router = useRouter()
  return <div>
    <ul className={
      props.isActive.menuActive ? 
      `${styles['social']} ${styles['vertical']} ${styles['active']}` : 
      `${styles['social']} ${styles['vertical']}`
      }>
      <li><a 
          href="https://twitter.com/Mostafa__Tawfik" 
          target="_blank "
          rel="noreferrer">
            <img 
              src= {router.pathname === '/portfolio/[projectpath]' ? '../images/twitter.png' : 'images/twitter.png'}
              alt="twitter logo">
            </img>
          </a>
      </li>
      <li><a 
          href="https://dribbble.com/Mostafa_Tawfik" 
          target="_blank"
          rel="noreferrer">
            <img 
              src={router.pathname === '/portfolio/[projectpath]' ? '../images/dribbble.png' : './images/dribbble.png'}
              alt="dribbble logo">
            </img>
          </a>
      </li>
      <li><a 
            href="https://www.behance.net/Mostafa_Tawfik" target="_blank"
            rel="noreferrer">
              <img 
                src={router.pathname === '/portfolio/[projectpath]' ? '../images/behance.png' : './images/behance.png'}
                alt="behance logo">
              </img>
          </a>
      </li>
      <li><a 
            href="https://github.com/Mostafa-Tawfik" 
            target="_blank"
            rel="noreferrer">
              <img 
                src={router.pathname === '/portfolio/[projectpath]' ? '../images/github.png' : './images/github.png'}
                alt="github logo">
              </img>
          </a>
      </li>
      <li><a 
            href="https://www.linkedin.com/in/m8ustafa-tawfik/"
            target="_blank" 
            rel="noreferrer">
              <img 
                src={router.pathname === '/portfolio/[projectpath]' ? '../images/linkedin.png' : './images/linkedin.png' }
                alt="linkedin logo">
              </img>
          </a>
        </li>
    </ul>
  </div>;
}
