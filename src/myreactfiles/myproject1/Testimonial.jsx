import React from 'react'
import logo from "./images/quick-icon.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonial() {
  const multiItemSettings = {
    dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
  };

  let test = [{ t: "Testimonial", td1: "MOLIK", td2: "JEAANSON", p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia", }]
  return (
    <div id='test'>
      {test.map((item) => (
        <div className='test'>
          <h1>{item.t}</h1>
          <div className="slider-container3">
          <Slider {...multiItemSettings}>
            <div className='testsection'>
              <div>
                <div className='testhover'>
                  <h3>{item.td1}</h3>
                  <img src={logo} alt="" />
                </div>
                <center><p>{item.p}</p></center>
              </div>
              <div>
                <div className='testhover'>
                  <img src={logo} alt="" />
                  <h3>{item.td2}</h3>
                </div>
                <center><p>{item.p}</p></center>
              </div>
            </div>
             <div className='testsection'>
              <div>
                <div className='testhover'>
                  <h3>{item.td1}</h3>
                  <img src={logo} alt="" />
                </div>
                <center><p>{item.p}</p></center>
              </div>
              <div>
                <div className='testhover'>
                  <img src={logo} alt="" />
                  <h3>{item.td2}</h3>
                </div>
                <center><p>{item.p}</p></center>
              </div>
            </div>
          </Slider>
          </div>
          <center>
            <button className='btns'><i class="fa-solid fa-angle-right fa-2xl"></i></button>
            <button className='btns' id='btn'><i class="fa-solid fa-angle-left fa-2xl"></i></button>
          </center>
        </div>
      ))}

    </div>
  )
}