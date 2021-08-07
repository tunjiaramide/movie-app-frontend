import React, {useContext } from 'react'
import styles from './Main.module.css'
import { Link } from 'react-router-dom'
import { InTheatresContext } from '../../App'

export default function Main({ children }) {
    const {inTheatres} = useContext(InTheatresContext);
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.top_nav}>
                    <div className={styles.leftside}>
                        <ul>
                            <li><button onClick={() => inTheatres(true) } className="btn">In theatres</button></li>
                            <li><button onClick={() => inTheatres(false) } className="btn">Coming Soon</button></li>
                        </ul>
                    </div>
                    <div className={styles.rightside}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/logout">Log Out</Link></li>
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
