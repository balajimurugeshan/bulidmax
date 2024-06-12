import React from 'react'
import "./Project.css"
import "./Media.css"
export default function Top() {
  let contact = [{ phone: "+01-40-114-6855" ,  gamil: "demo@gmail.com" ,  place: "Mordern Tawon Mosco" }]
  return (
    <div>
        {contact.map((item) => (
          <div className='contact'>
            <p><i class="fas fa-phone"></i> {item.phone}</p>
            <p><i class="fa-solid fa-envelope"></i> {item.gamil}</p>
            <p><i class="fa-solid fa-location-dot"></i> {item.place}</p>
          </div>
        ))}
    </div>  
  )
}