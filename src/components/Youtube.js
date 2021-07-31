import React from 'react'

export default function Youtube({url}) {

    const embedId = url.split('=')[1];

    return (
        <iframe 
                    width="100%" 
                    height="450" 
                    src={`https://www.youtube.com/embed/${embedId}`}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
        </iframe>
    )
}
