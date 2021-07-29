import React from 'react'
import styles from './Single.module.css'

export default function Single() {
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
                    <h2>Ender's Game</h2>
                    <h5>Action</h5>
                    <h6>120 Minutes<span> stars</span></h6>
                    <h4>Nigeria</h4>
                </div>
                

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Commodo ullamcorper a lacus vestibulum sed arcu. Egestas dui id ornare arcu. 
                    Sit amet mattis vulputate enim nulla aliquet porttitor lacus. 
                    Laoreet suspendisse interdum consectetur libero id faucibus.
                    Sed euismod nisi porta lorem mollis aliquam ut. Viverra justo nec 
                    ultrices dui sapien eget mi. </p>
                    
                    <p>Varius morbi enim nunc faucibus a 
                    pellentesque sit amet. Libero justo laoreet sit amet cursus sit amet. 
                    Lectus vestibulum mattis ullamcorper velit sed. Pulvinar sapien et 
                    ligula ullamcorper. Bibendum ut tristique et egestas. Sit amet purus 
                    gravida quis blandit turpis. Orci porta non pulvinar neque laoreet 
                    suspendisse interdum. Porta lorem mollis aliquam ut porttitor. 
                    Sed faucibus turpis in eu mi. Aliquam etiam erat velit 
                    scelerisque in dictum non.</p>
            </div>
        </div>
    )
}
