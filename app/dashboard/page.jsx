import React from 'react'
import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/Card'
import { MdOutlineAttachMoney, MdSupervisedUserCircle, MdWarehouse } from 'react-icons/md'
import Chart from '../ui/dashboard/chart/Chart'
import Rightbar from '../ui/dashboard/rightbar/Righbar'
import Transactions from '../ui/dashboard/transactions/Transactions'

const cards = [
  {
    id: 1,
    icon: <MdSupervisedUserCircle />,
    title: "Total Users",
    number: 3490,
    percent: "20",
    text: "more than last year"
  },
  {
    id: 2,
    icon: <MdWarehouse />,
    title: "Stock",
    number: 190,
    percent: "42",
    text: "less than last year"
  },
  {
    id: 3,
    icon: <MdOutlineAttachMoney />,
    title: "Revenue",
    number: 4536.99,
    percent: "12",
    text: "more than last year"
  },
]
const Dashboard = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {
            cards.map(card => {
              return (
                <Card key={card.id} {...card} />
              )
            })
          }
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>


  )
}

export default Dashboard