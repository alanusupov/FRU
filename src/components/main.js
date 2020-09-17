import React from 'react'
import Header from './header'

import Footer from './Footer'

// import Sidebar from './Sidebar'




function Main(props) {
  return (
    <div>
      <Header  />
      
      <div className="page-wrapper">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Main
