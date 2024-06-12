import React from 'react'
export default function Foot() {
    let detail = [{ phone: "+01-40-114-6855", gamil: "Demo@gmail.com", place: "Mordern Tawon Mosco", h1: "QUICK LINKS", ol1: "Home", ol2: "Service", ol3: "Testimonial", ol4: "Contact us", ol5: "About", ol6: "Project", ol7: "Blog", work: "WORK PORTFOLIO", p: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem", sign: "SIGN UP TO OUR NEWSLETTER", btn: "SUBSCRIBE" }]
    return (
        <div>
            {detail.map((item) => (
                <div className='final_section'>
                    <div className='contact_dt'>
                        <p><i class="fas fa-phone"></i> {item.phone}</p>
                        <p><i class="fa-solid fa-envelope"></i> {item.gamil}</p>
                        <p><i class="fa-solid fa-location-dot"></i> {item.place}</p>
                    </div>
                    <div className='site_inform'>
                        <div>
                            <h1>{item.h1}</h1>
                            <div className='ol_list'>
                                <ol>
                                    <li>{item.ol1}</li>
                                    <li>{item.ol2}</li>
                                    <li>{item.ol3}</li>
                                    <li>{item.ol4}</li>
                                </ol>
                                <ol>
                                    <li>{item.ol5}</li>
                                    <li>{item.ol6}</li>
                                    <li>{item.ol7} </li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <h1>{item.work}</h1>
                            <p>{item.p}</p>
                        </div>
                        <div className='input'>
                            <h1>{item.sign}</h1>
                            <input type="gmail" placeholder='Enter Your Email' /> <br /> <br />
                            <button>{item.btn} </button>
                        </div>
                    </div>
                    <div className='icon'>
                        <center className='lasticon'>
                            <i class="fa-brands fa-facebook fa-2xl"></i>
                            <i class="fa-brands fa-twitter fa-2xl"></i>
                            <i class="fa-brands fa-linkedin-in fa-2xl"></i>
                            <i class="fa-brands fa-instagram fa-2xl"></i>
                        </center>
                    </div>
                </div>
            ))}
            <center>
                <p style={{margin:"0px"}}> 2019 All Rights Reserved. Design by <span className="name">BALAJIMURUGESHAN</span> Distribution by <span className="name">ThemeWagon</span></p>
            </center>
        </div>
    )
}
