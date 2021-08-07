import React from 'react'
import styles from './Single.module.css'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import Youtube from '../../components/Youtube';

export default function Single() {
    const location = useLocation();
    const movieId = location.pathname.split('/')[2];
    const [movie, setMovie ] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const getSingleMovie = async () => {
        setLoading(true)
        try {
        const { data } = await axios.get(`/movies/${movieId}`);
        setMovie(data);
        setLoading(false)
        } catch(err) {
        setError(err)
        }
    }

    useEffect(() => {
        getSingleMovie();
    }, [movieId])
    
    if(loading) return (
        <div className={styles.details_cover}>
               <p>Loading......</p>     
        </div>
    )
    if(error) return (
        <div className={styles.details_cover}>
               <p>{error.message}</p>     
        </div>
    )

    console.log(movie);

    return (
        <div className={styles.details_cover}>
            <div className={styles.youtube}>
               <Youtube url={movie[0].youtube}/> 
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <h2>{movie[0].title}</h2>
                    <h5>{movie[0].genre}</h5>
                    <h6>{movie[0].minutes} Minutes<span> stars</span></h6>
                    <h4>{movie[0].country}</h4>
                </div>
                <p>{movie[0].description}</p>
            </div>
        </div>
        
    )
}
