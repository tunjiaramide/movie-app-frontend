import React from 'react'
import styles from './Single.module.css'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getSingleMovie } from '../../api';

export default function Single() {
    const location = useLocation();
    const movieId = location.pathname.split('/')[2];
    
    const {isLoading, error, isError, data} = useQuery('movies', () => getSingleMovie(movieId))
    
    if(isLoading) return (
        <div className={styles.details_cover}>
               <p>Loading......</p>     
        </div>
    )
    if(isError) return (
        <div className={styles.details_cover}>
               <p>{error}</p>     
        </div>
    )
 
    return (
        <div className={styles.details_cover}>
            <div className={styles.youtube}>
                <iframe 
                    width="100%" 
                    height="450" 
                    src="https://www.youtube.com/embed/wDscAvheUeg" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>

            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <h2>{data[0].title}</h2>
                    <h5>{data[0].genre}</h5>
                    <h6>{data[0].minutes} Minutes<span> stars</span></h6>
                    <h4>{data[0].country}</h4>
                </div>
                

                <p>{data[0].description}</p>
            </div>
        </div>
    )
}
