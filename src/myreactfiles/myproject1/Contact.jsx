import React from 'react'
import logo from "./images/contact-img.png"
export default function Contact() {

    return (
        <div className='contact_section' id='contact'>
            <div>
                <h1>Contact Us</h1>
                <input type="text" placeholder=' Enter Your Name' /> <br />
                <input type="number" placeholder='Enter Your Phone Number' /> <br />
                <input type="gmail" placeholder='Enter Your Email' /> <br />
                <input type="text" placeholder='Message' className='message' /> <br/>
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}
