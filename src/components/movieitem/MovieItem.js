import React from 'react'
import styles from './MovieItem.module.css'
import { Link } from 'react-router-dom'

export default function MovieItem({ movie }) {
    const { _id, title, genre, minutes, description, poster} = movie;
    return (
        <div className={styles.movie_cover}>
                <div className={styles.img_cover}>
                    <img src={poster} alt="" />
                </div>
                <div className={styles.content_cover}>
                    <h2>{title}</h2>
                    <h5>{genre}</h5>
                    <h6>{minutes} Minutes <span>Stars</span></h6>
                    <p>{description.substring(0, 70)}...</p>
                </div>
                <button className={`btn ${styles.more}`}><Link to={`/movies/${_id}`}>Details</Link></button>
        </div> 
    )
}
