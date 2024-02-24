import React from 'react'
import styles from './sidebar.module.css'
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md'
import MenuLink from './menuLink/menuLink'

const menuItems = [
  {
    id: 1,
    title: "Pages",
    list: [
      {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        id: 2,
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
        active: true
      },
      {
        id: 3,
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        id: 4,
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      }
    ]

  },
  {
    id: 2,
    title: "Analytics",
    list: [
      {
        id: 1,
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        id: 2,
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        id: 3,
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      }
    ]

  },
  {
    id: 3,
    title: "User",
    list: [
      {
        id: 1,
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        id: 2,
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
      {
        id: 3,
        title: "Logout",
        path: "/dashboard/logout",
        icon: <MdLogout />
      }
    ]

  }
]

const Sidebar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src="/noavatar.png" alt="" />
        <div className={styles.userInfo}>
          <span className={styles.username}>samed</span>
          <span className={styles.role}>admin</span>
        </div>

      </div>
      <ul className={styles.list}>
        {
          menuItems.map(cat => {
            return (
              <li key={cat.id}>
                <span className={styles.cat}>{cat.title}</span>
                {
                  cat.list.map(item => {
                    return (
                      <MenuLink item={item} key={item.id} />
                    )
                  })
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar