import React from 'react'
import styles from './MovieItem.module.css'

export default function MovieItem() {
    return (
        <div className={styles.movie_cover}>
                <div className={styles.img_cover}>
                    <img src="images/poster1.jpeg" alt="" />
                </div>
                <div className={styles.content_cover}>
                    <h2>Ender's Game</h2>
                    <h5>Action</h5>
                    <h6>120 Minutes <span>Stars</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. </p>
                </div>
                <button className={`btn ${styles.more}`}>Details</button>
        </div> 
    )
}
