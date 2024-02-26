import React from 'react'
import styles from './Transactions.module.css'
const transactions = [
  {
    id: 1,
    name: "Zoe Alin",
    image: "noavatar.png",
    status: "cancelled",
    date: "2024-09-33",
    amount: "$34.99"
  },
  {
    id: 2,
    name: "Adam Joe",
    image: "noavatar.png",
    status: "pending",
    date: "2024-09-33",
    amount: "$34.99"
  },
  {
    id: 3,
    name: "samed reed",
    image: "noavatar.png",
    status: "success",
    date: "2024-09-33",
    amount: "$34.99"
  },
  {
    id: 4,
    name: "Alan klast",
    image: "noavatar.png",
    status: "failed",
    date: "2024-09-33",
    amount: "$34.99"
  },
]

const Transactions = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map(transaction => {
              const statusClassNames = `${styles.status} ${styles[transaction.status]}`;

              return (
                <tr key={transaction.id}>
                  <td className={styles.name}>
                    <img src={"/" + transaction.image} alt="" />
                    {transaction.name}
                  </td>
                  <td><span className={`${statusClassNames} `}>{transaction.status}</span> </td>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>)
}

export default Transactions