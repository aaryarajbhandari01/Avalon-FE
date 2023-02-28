import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./About.css"

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
  
        <div className='heroSection'>
            <div className="heroSection-container">
                <div className='grid grid-two-column'>
                    <div className="hero-section-data">
                        <p className="intro-data">Welcome to</p>
                        <h1>Avalon Apparels</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non orci eros. 
                        Fusce tristique, elit in hendrerit pharetra, tortor leo pulvinar magna, vel pharetra
                        enim leo non quam. Nunc sem erat, bibendum at leo ac, bibendum facilisis massa. Nullam 
                        vitae nunc sed aliquam.
                        </p>
                    <div className='shopBtn'>
                        <button >
                        <Link className ="link" to="/products">
                            <span>Shop Now</span>
                        </Link>
                        </button>
                    </div>
    
                    </div>
                    {/* home page image */}
                    <div className="hero-section-image">
                        <figure>
                            <img src={'/images/aboutImg0.PNG'} 
                            alt="hero-image" 
                            className='img-style'/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About