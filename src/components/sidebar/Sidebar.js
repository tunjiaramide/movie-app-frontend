import React, {useContext } from 'react'
import styles from './Sidebar.module.css'
import { InTheatresContext } from '../../App'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const {inCategory} = useContext(InTheatresContext);
    const {inCountry} = useContext(InTheatresContext);
    return (
        <div>
            <div className={styles.logo}>
                <Link to="/">Logo</Link>
            </div>
            <nav className={styles.nav}>
                <div className={styles.title}><h3>Genre</h3></div>
                <ul>
                    <li><Link onClick={() => inCategory('action')} to="/#">Action</Link></li>
                    <li><Link onClick={() => inCategory('adventure')} to="/#">Adventure</Link></li>
                    <li><Link onClick={() => inCategory('comedy')} to="/#">Comedy</Link></li>
                    <li><Link onClick={() => inCategory('horror')} to="/#">Horror</Link></li>
                    <li><Link onClick={() => inCategory('drama')} to="/#">Drama</Link></li>
                </ul>

                <div className={styles.title}><h3>Country</h3></div>
                <ul>
                    <li><Link onClick={() => inCountry('nigeria')} to="/#">Nigeria</Link></li>
                    <li><Link onClick={() => inCountry('usa')} to="/#">United States</Link></li>
                    <li><Link onClick={() => inCountry('uk')} to="/#">United Kingdom</Link></li>
                    <li><Link onClick={() => inCountry('asia')} to="/#">Asia</Link></li>
                </ul>

            </nav>
        </div>
    )
}
