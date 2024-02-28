import React from 'react'
import styles from './btn.module.css'

const Btn = (props) => {
  return (
    <button className={styles.btn}>{props.icon} {props.text }</button>
  )
}

export default Btn