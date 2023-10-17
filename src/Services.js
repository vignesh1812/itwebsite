import React from 'react'
import './Services.css';
const Services = () => {
    return (
        <div className='services' id='service'>
            <h1>Services</h1>
            <div className="services-links">
                <div className="">
                    <div className="webdevlopment">
                        <h2>Webdevlopment</h2>
                        <p>Unleash Your Brand’s Potential with Stunning Web Design.</p>
                    </div>
                    <div className="appdevlopment">
                        <h2>AppDevelopment</h2>
                        <p>Innovate, Develop, Thrive: Your App, Our Expertise.</p>
                    </div>
                </div>
                <div className="">
                    <div className="digitalmarketing">
                        <h2>Digital Marketing</h2>
                        <p>Elevate Your Brand, Dominate the Digital World.</p>
                    </div>
                    <div className="digitalmarketing">
                        <h2>Cyber security</h2>
                        <p>Protecting the Digital Frontier, One Byte at a Time.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services