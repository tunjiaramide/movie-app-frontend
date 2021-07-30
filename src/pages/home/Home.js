import React from 'react'
import styles from './Home.module.css';
import MovieItem from '../../components/movieitem/MovieItem';
import { getAllMovies } from '../../api';
import { useQuery } from 'react-query';

export default function Home() {
    const {isLoading, error, isError, data} = useQuery('movies', getAllMovies)

    if(isLoading) return (
        <div className={styles.home_cover}>
               <p>Loading......</p>     
        </div>
    )
    if(isError) return (
        <div className={styles.home_cover}>
               <p>{error}</p>     
        </div>
    )
    return (
            <div className={styles.home_cover}>
                    {data.map((movie) => <MovieItem movie={movie} key={movie._id} />)}  
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#!">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                        </ul>                               
                    </nav>
            </div>
    )
}
