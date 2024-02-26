import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    const status = props.percent > 40 ? styles.positive : styles.negative

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            <div className={styles.content}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.number}>{props.number}</span>
                <span className={styles.text}> <span className={status}>{props.percent + "% "}</span>{props.text}</span>

            </div>
        </div>
    )
}

export default Card