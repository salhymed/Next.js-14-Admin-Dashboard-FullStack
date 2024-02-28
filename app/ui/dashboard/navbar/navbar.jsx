"use client"
import React from 'react'
import styles from './navbar.module.css'
import { MdMessage, MdNotifications, MdSupervisedUserCircle } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import SearchBox from '../../common/search/SearchBox'

const Navbar = () => {
  const pathname = usePathname().split("/").pop().toUpperCase()
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{pathname}</span>
      </div>
      <div className={styles.menu}>
        <SearchBox placeholder="search" />
        <div className={styles.icons}>
          <MdMessage />
          <MdNotifications />
          <MdSupervisedUserCircle />
        </div>
      </div>
    </div>
  )
}

export default Navbar