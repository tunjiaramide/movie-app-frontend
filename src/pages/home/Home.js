import React from 'react'
import styles from './Home.module.css';
import MovieItem from '../../components/movieitem/MovieItem';

export default function Home() {
    return (
        <div className={styles.home_cover}>
            {[...Array(9)].map((movie, i) => <MovieItem key={i} />)}  
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
