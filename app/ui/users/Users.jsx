import React from 'react'
import styles from './users.module.css'
import SearchBox from '../common/search/SearchBox'
import Btn from '../common/btn/Btn'
import Pagination from '../common/pagination/Pagination'
import Link from 'next/link'

const users = [
    {
        "id": 1,
        "firstName": "Terry",
        "lastName": "Medhurst",
        "maidenName": "Smitham",
        "age": 50,
        "gender": "male",
        "email": "atuny0@sohu.com",
        "phone": "+63 791 675 8914",
        "username": "atuny0",
        "birthDate": "2000-12-25",
        "image": "https://robohash.org/Terry.png?set=set4",
        "role": "client"
    },
    {
        "id": 2,
        "firstName": "Sheldon",
        "lastName": "Quigley",
        "maidenName": "Cole",
        "age": 28,
        "gender": "male",
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        "username": "hbingley1",
        "birthDate": "2003-08-02",
        "image": "https://robohash.org/Sheldon.png?set=set4",
        "bloodGroup": "O+",
        "role": "admin"
    },
    {
        "id": 3,
        "firstName": "Terrill",
        "lastName": "Hills",
        "maidenName": "Hoeger",
        "age": 38,
        "gender": "male",
        "email": "rshawe2@51.la",
        "phone": "+63 739 292 7942",
        "username": "rshawe2",
        "birthDate": "1992-12-30",
        "image": "https://robohash.org/Terrill.png?set=set4",
        "role": "client"
    },
    {
        "id": 4,
        "firstName": "Miles",
        "lastName": "Cummerata",
        "maidenName": "Maggio",
        "age": 49,
        "gender": "male",
        "email": "yraigatt3@nature.com",
        "phone": "+86 461 145 4186",
        "username": "yraigatt3",
        "birthDate": "1969-01-16",
        "image": "https://robohash.org/Miles.png?set=set4",
        "role": "guest"
    },
]
const Users = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <SearchBox placeholder={"search for a user"}/>
                <Link href="/dashboard/users/add">
                <Btn text="Add New" />
                </Link>
            </div>
            <div className={styles.content}>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Birth Date</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td className={styles.name}>
                                            <img src={ user.image} alt="" />
                                            {user.firstName +" "+ user.lastName}
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>{user.birthDate}</td>
                                        <td>{user.role}</td>
                                        <td className={styles.actions}>
                                            <span className={styles.view}>View</span>
                                            <span className={styles.delete}>Delete</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <Pagination />

            </div>

        </div>
    )
}

export default Users