import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/img-1.png"
import img2 from "./images/img-2.png"
import img3 from "./images/img-3.png"

const Projectslider = () => {
    const multiItemSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    let project = [{ h1: "Projects", ol1: "CATEGORY FILTER", ol2: "ALL", ol3: "PAINTINTL", ol4: "RECONSTRUCTIL", ol5: "REPAIRSL", ol6: "RESIDENTALL", home: "HOME WORK", p: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use" }]
    return (
        <div id='pro'>
            <div className="slider-container">
                {project.map((item) => (
                    <div className='project'>
                        <div className='project_nav'>
                            <h1>{item.h1}</h1>
                            <ol>
                                <li>{item.ol1}</li>
                                <li>{item.ol2}</li>
                                <li>{item.ol3}</li>
                                <li>{item.ol4}</li>
                                <li>{item.ol5}</li>
                                <li>{item.ol6}</li>
                            </ol>
                        </div>
                        <div className="slider">
                            <div className="slider-container2">
                                <Slider {...multiItemSettings}>
                                    <div>
                                        <img src={img1} alt="" />
                                        <h5>{item.home}</h5>
                                        <p>{item.p}</p>
                                    </div>
                                    <div>
                                        <img src={img2} alt="" />
                                        <h5>{item.home}</h5>
                                        <p>{item.p}</p>
                                    </div>
                                    <div>
                                        <img src={img3} alt="" />
                                        <h5>{item.home}</h5>
                                        <p>{item.p}</p>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </div>
                ))} <br /> <br /> <br /> <br />
            </div>
        </div >
    );
}

export default Projectslider;
