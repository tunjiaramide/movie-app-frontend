import React from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div>
            <div className={styles.logo}>
                Logo
            </div>
            <nav className={styles.nav}>
                <div className={styles.title}><h3>Genre</h3></div>
                <ul>
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Comedy</li>
                    <li>Horror</li>
                    <li>Romance</li>
                </ul>

                <div className={styles.title}><h3>Country</h3></div>
                <ul>
                    <li>Nigeria</li>
                    <li>United States</li>
                    <li>United Kingdom</li>
                    <li>Asia</li>
                </ul>

            </nav>
        </div>
    )
}
