import React from 'react'
import styles from './Home.module.css';
import MovieItem from '../../components/movieitem/MovieItem';

export default function Home() {
    return (
        <div className={styles.home_cover}>
            {[...Array(9)].map((movie, i) => <MovieItem key={i} />)}   
        </div>
    )
}
