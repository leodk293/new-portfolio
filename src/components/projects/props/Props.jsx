import React from 'react'
import './styles.css'

export default function Props({ image, title, description }) {
    return (
        <div className='template'>
            <div className="content">
                <img src={image} alt="IMAGE" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="icons">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    </div>
                </div>
            </div>

        </div>
    )
}
