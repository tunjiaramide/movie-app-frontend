import React from 'react'
import styles from './Addmovie.module.css'

export default function Addmovie() {
    return (
        <div className={styles.addmovie_cover}>
            <form className={styles.form}>
                <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Movie Title</label>
                    </div>
                    <div class="col-md-9">
                        <input type="text" className="form-control" />
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Movie Description</label>
                    </div>
                    <div class="col-md-9">
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Select Genre</label>
                    </div>
                    <div class="col-md-9">
                        <select className="form-select">
                            <option selected value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="horror">Horror</option>
                            <option value="drama">Drama</option>
                            <option value="comedy">Comedy</option>
                        </select>
                    </div>
                 </div>
                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Select Country</label>
                    </div>
                    <div class="col-md-9">
                        <select className="form-select">
                            <option selected value="nigeria">Nigeria</option>
                            <option value="usa">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="asia">Asia</option>
                        </select>
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Movie Minutes</label>
                    </div>
                    <div class="col-md-9">
                        <input type="number" className="form-control" />
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Youtube Id Link</label>
                    </div>
                    <div className="col-md-9">
                        <input type="text" className="form-control" />
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">In Theatres</label>
                    </div>
                    <div class="col-md-9">
                        <select className="form-select">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                        <label className="col-form-label">Poster Image</label>
                    </div>
                    <div class="col-md-9">
                        <div className="input-group mb-3">
                            <input type="file" class="form-control" id="inputGroupFile02" />
                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                        </div>
                    </div>
                 </div>

                 <div className="row g-3 align-items-center">
                    <div className="col-md-3">   
                    </div>
                    <div class="col-md-9">
                        <button type="submit" className="btn">Add Movie</button> 
                    </div>
                 </div>            
            </form>
        </div>
    )
}
