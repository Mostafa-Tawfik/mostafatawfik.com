import React from 'react'
import styles from '../styles/components/Social.module.scss'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'

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
            <Icon icon="bytesize:twitter" color="white" width="35" />
          </a>
      </li>
      <li><a 
            href="https://github.com/Mostafa-Tawfik" 
            target="_blank"
            rel="noreferrer">
              <Icon icon="mdi:github" style={{fontSize: '35px'}}/>
          </a>
      </li>
      <li><a 
            href="https://www.linkedin.com/in/m8ustafa-tawfik/"
            target="_blank" 
            rel="noreferrer">
              <Icon icon="bxl:linkedin-square" color="white" width="35" />
          </a>
        </li>
      <li><a 
          href="https://dribbble.com/Mostafa_Tawfik" 
          target="_blank"
          rel="noreferrer">
            <Icon icon="bi:dribbble" color="white" width="35" />
          </a>
      </li>
      <li><a 
            href="https://www.behance.net/Mostafa_Tawfik" target="_blank"
            rel="noreferrer">
              <Icon icon="ion:logo-behance" color="blue" width="35" />
          </a>
      </li>
    </ul>
  </div>;
}
