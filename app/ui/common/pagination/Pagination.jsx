import React from 'react'
import styles from './pagination.module.css'
import Btn from '../btn/Btn'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const Pagination = () => {
  return (
    <div className={styles.container}>
        <Btn text="<< Prev "/>
        <Btn text="Next >>"/>
    </div>
  )
}

export default Pagination