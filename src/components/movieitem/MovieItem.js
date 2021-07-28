import React from 'react'
import styles from './MovieItem.module.css'

export default function MovieItem() {
    return (
        <div className={styles.movie_cover}>
                <div className="img_cover">
                    <img src="https://via.placeholder.com/250-x370" alt="" />
                </div>
                <div className="content_cover">
                    <h2>Ender's Game</h2>
                    <h5>Action</h5>
                    <h6>120 Minutes <span>Stars</span></h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. </p>
                </div>
                <button className="btn btn-primary">Details</button>
        </div> 
    )
}