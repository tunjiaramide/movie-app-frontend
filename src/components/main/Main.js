import React from 'react'
import styles from './Main.module.css'
import { Link } from 'react-router-dom'

export default function Main({ children}) {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.top_nav}>
                    <div className={styles.leftside}>
                        <ul>
                            <li>In theatres</li>
                            <li>Coming Soon</li>
                        </ul>
                    </div>
                    <div className={styles.rightside}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li className={styles.add}><Link to="/movie/addmovie">Add Movie</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
