import React from 'react'
import styles from './Home.module.css';
import MovieItem from '../../components/movieitem/MovieItem';


export default function Home({isLoading, isError, data}) {
   

    if(isLoading) return (
        <div className={styles.home_cover}>
               <p>Loading......</p>     
        </div>
    )

    if(isError) return (
        <div className={styles.home_cover}>
               <p>There is an error</p>     
        </div>
    )

    return (
            <div className={styles.home_cover}>
                    {data.map(movie => <MovieItem movie={movie} key={movie._id} />)} 
                    {/* <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#!">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                        </ul>                               
                    </nav> */}
            </div>
    )
}
