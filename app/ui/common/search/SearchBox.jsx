import React from 'react'
import styles from './searchbox.module.css'
import { MdSearch } from 'react-icons/md'


const SearchBox = (props) => {
  return (
    <div className={styles.search}>
      <span className={styles.icon}>
        <MdSearch />
      </span>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default SearchBox