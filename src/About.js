import React from 'react'
import'./About.css';

const About = () => {
  return (
    <div className='aboutus' id='about'>
        <h1>About us!</h1>

        <div>
        <div className="aboutus-image">

            <img src="https://yt3.googleusercontent.com/ytc/APkrFKa-OosId7uWR3YdufLa404LsVxAT9MpaEiG2H_k=s900-c-k-c0x00ffffff-no-rj" alt="" />
        </div>
        <div className="aboutus-content">
            <p>Our clients consider our experts to be a part of their team and trust us to create mobile and web applications for a global audience. We work with startups and agencies, delivering high-quality products with complete discretion. Our clear understanding of both design and technology combined with our emphasis on culture and consumer behaviors enhance communication and the final result.</p>
        </div>
        </div>
    </div>
  )
}

export default About