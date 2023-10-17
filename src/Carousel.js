import React from 'react'
import webdev from './webdev.jpg';
import appdev from './appdev.jpg';
import digimark from './digmark.jpg';
import './Carousel.css'

const Carousel = () => {
  return (
    <div className="carous"id='navigation'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={webdev} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={appdev} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src={digimark} className="d-block w-100" alt=""/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel