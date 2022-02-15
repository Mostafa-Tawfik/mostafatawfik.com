import React from 'react';
import styles from '../styles/components/Menu.module.scss'
import Link from 'next/link';

export default function Menu(props) {
  return <div>
    <div className={styles['menu']}>
      <ul >
        <li>
        <Link href={'/'}>     
          <a className={styles["menuLi"]} onClick={props.toggle}>
            Home
          </a></Link>
        </li>
        <li>
        <Link href={'/about'}>     
          <a className={styles["menuLi"]} onClick={props.toggle}>
            About Me
          </a></Link>
        </li>
        <li>
        <Link href={'/portfolio'}>     
          <a className={styles["menuLi"]} onClick={props.toggle}>
            Portfolio
          </a></Link>
        </li>
      </ul>
    </div>
  </div>;
}
