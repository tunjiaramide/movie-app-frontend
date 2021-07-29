import React from 'react'
import styles from './Auth.module.css'

export default function Login() {
    return (
        <div className={styles.register_cover}>
            <h2>Login to Add Movie</h2>
            <form className={styles.form}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username"
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="btn">Login</button> <span>or Register</span>             
            </form>
        </div>
    )
}
