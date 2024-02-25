"use client"
import React from 'react'
import styles from './navbar.module.css'
import { MdMessage, MdNotifications, MdSearch, MdSupervisedUserCircle } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname().split("/").pop().toUpperCase()
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{pathname}</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <span className={styles.icon}>
            <MdSearch />
          </span>
          <input type="text" placeholder='search' />
        </div>
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