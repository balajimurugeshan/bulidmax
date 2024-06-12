import React from 'react'
import logo from "./images/play-icon.png"
export default function Aboutdetail() {
    let about = [{ h1: "About Us", p: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All", read: "Read More" }]
    return (
        <div id='about'>
            <br /> <br />
            {about.map((item) => (
                <div className='about'>
                    < div className='aboutdetails'>
                        <h1>{item.h1}</h1>< br />
                        <p>{item.p}</p>< br />
                        <a href="#top">{item.read}</a>
                    </div>
                    <div className='aboutsection'>
                        <div className='aboutimg'>
                            <img src={logo} alt="" className='playicon' />
                        </div>

                    </div>
                </div>
            ))}
            <br /> <br /> <br /> <br />
        </div>
    )
}
