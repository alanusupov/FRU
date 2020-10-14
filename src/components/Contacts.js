import React from 'react'
import Iframe from 'react-iframe'
function Contacts() {
  return (
    <div>
      <h2>Contacts</h2>
    <ul style={{listStyleType: 'none'}}>
      <li>
        Email: fru.herit@gmail.com
      </li>
      <li>
        Number: +3423333223
      </li>
      <li>
        Address: Fake Street 21
      </li>

    </ul>



      <h5>Find us here</h5>
      
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46786.349507798186!2d74.5827548758963!3d42.86974464705895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek!5e0!3m2!1sen!2skg!4v1599799994837!5m2!1sen!2skg"

            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}/>
    </div>
  )
}

export default Contacts
