import React from 'react'
import styles from './Auth.module.css'

export default function Register() {
    return (
        <div className={styles.register_cover}>
            <h2>Register to Add Movie</h2>
            <form className={styles.form}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username"
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email address"
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" className="btn">Register</button> <span>or Login</span>             
            </form>
        </div>
    )
}
