import React from 'react';
import logo1 from "./images/icon-1.png";
import logo2 from "./images/icon-2.png";
import logo3 from "./images/icon-3.png";
import logo4 from "./images/icon-4.png";


export default function Service() {
    const card = [{ h1: "Our Service", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", read: "Read More" }];
    const servicetitles = [
        { servicetitle1: "CONSTRUCTION SERVICES", servicetitle2: "BUILDING MODELING", servicetitle3: "PRE CONSTRUCTION", servicetitle4: "MANAGEMENT", service: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ", read: "Read More" }
    ];
    return (
        <div id='our'>
            <div>
                {card.map((item, index) => (
                    <div key={index} className="our">
                        <br /><br />
                        <h1>{item.h1}</h1>
                        <p>{item.p}</p>
                    </div>
                ))}
            </div>
            <br /><br />
            <div>
                {servicetitles.map((item) => (
                    <div className='oursection'>
                        <div className='oursection1'>
                            <div className='our1'>
                                <img src={logo1} alt="" />
                                <h3>{item.servicetitle1}</h3>
                                <p>{item.service}</p>
                                <a href="#top">{item.read}</a>  <br /> <br />
                            </div>
                            <div className='our2'>
                                <img src={logo2} alt="" />
                                <h3>{item.servicetitle2}</h3>
                                <p>{item.service}</p>
                                <a href="#top">{item.read}</a><br /> <br />
                            </div>
                        </div>
                        <div className='oursection2'>
                            <div className='our3'>
                                <img src={logo3} alt="" />
                                <h3>{item.servicetitle3}</h3>
                                <p>{item.service}</p>
                                <a href="#top">{item.read}</a> <br /> <br />
                            </div>
                            <div className='our4'>
                                <img src={logo4} alt="" />
                                <h3>{item.servicetitle4}</h3>
                                <p>{item.service}</p>
                                <a href="#top">{item.read}</a> <br /> <br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}