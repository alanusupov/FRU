import React from 'react'
import Slider from './Slider'
import Product from './Product'
import Contacts from './Contacts'

function base() {
  return (
    <div>
      <img className="banner" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2a4cd787799917.5dcc0921a4d2a.jpg"/>
          <Slider/>
        
        <Product dis={"none"}/>
        <Contacts/>
    </div>
  )
}

export default base
