import React from 'react'
import './Contactus.css';
const Contactus = () => {
    return (
        <div className='contactus' id='contactus'>
            <h1>Contactus</h1>
            <div className='d-flex justify-content-between flex-wrap'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input type="text" placeholder='Enter Your Name' />
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="tel" placeholder='Enter Your Phone' />
                    <textarea name="" placeholder='Write Your Message' id="" cols="30" rows="1"></textarea>
                    <button className='bg-success' type='submit'>Submit</button>
                </form>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="">
                        <h3>Contact via Email</h3>
                        <p className='text-center text-decoration-underline'>techchamp@gmail.com</p>
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center ">
                        <h3>Viewers Count</h3>
                        <h4>999+</h4>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contactus