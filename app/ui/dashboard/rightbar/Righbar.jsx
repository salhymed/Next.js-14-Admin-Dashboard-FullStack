import React from 'react'
import styles from './Rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img src="/astronaut.png" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Available Now !</span>
          <span className={styles.title}>How to use the new version o the admin dashboard ?</span>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deserunt voluptatum expedita suscipit exercitationem rem aliquid magnam nam atque perspiciatis, explicabo voluptates quis corporis at, sit reprehenderit, hic praesentium. Molestiae!</p>
          <button className={styles.btn}><MdPlayCircleFilled /> Watch </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <img src="/astronaut.png" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Available Now !</span>
          <span className={styles.title}>How to use the new version o the admin dashboard ?</span>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae deserunt voluptatum expedita suscipit exercitationem rem aliquid magnam nam atque perspiciatis, explicabo voluptates quis corporis at, sit reprehenderit, hic praesentium. Molestiae!</p>
          <button className={styles.btn}><MdPlayCircleFilled /> Watch </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar