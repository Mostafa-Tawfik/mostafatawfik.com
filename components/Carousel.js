import React, { Fragment } from 'react'
import styles from '../styles/components/Carousel.module.scss'
import AppData from '../AppData';

function Carousel() {

  const MAX_VISIBILITY = 3;

  const [active, setActive] = React.useState(2);
  const count = AppData.Projects.length;
  
  console.log(count)

  return (
    <div className={styles['carousel']}>
      {active > 0 && <button className={`${styles['nav']} ${styles['left']}`} onClick={() => setActive(i => i - 1)}>&laquo;</button>}
      {AppData.Projects.map((pro, i) => (
        <div key={pro.id} className={styles['card-container']} style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>

            <div className={styles['card']}>

            <img src='../../images/iphone.png' alt='preview' className={styles['project-mobile']}></img>

            <div className={styles["project-image-mobile"]} style={{backgroundImage:`url(${pro.imageMobile})`}}></div>
              
              {/* <h2>{pro.title}</h2>
              <p>{pro.desc}</p> */}
            </div>
        </div>
      ))}
      {active < count - 1 && <button className={`${styles['nav']} ${styles['right']}`} onClick={() => setActive(i => i + 1)}>&raquo;</button>}
    </div>
  );
}

export default Carousel