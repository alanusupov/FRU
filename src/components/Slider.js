import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../media/slider1.jpg'
import slide2 from '../media/slider2.jpg'
import slide3 from '../media/slider3.jpg'



function Slider() {
  return (
    <div className="d-flex">
        <Carousel style={{marginBottom: '70px'}}>
      <Carousel.Item style={{ height:"750px"}}>
          <img className="d-block w-100" src={slide1} alt="forest"/>
          <Carousel.Caption style={{top: "10px", bottom:"0", color: "black"}}>
              <h3>Gallery</h3>
              <p>Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette.Raw denim whatever you probably haven't heard of them hammock.
                   Seitan fam ramps tote bag pork belly normcore sriracha raclette.
                   Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette. </p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height:"750px"}}>
          <img className="d-block w-100" src={slide2} alt="forest"/>
          <Carousel.Caption style={{top: "10px", bottom:"0", color: "black"}}>
              <h3>Gallery</h3>
              <p>Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette.
              Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette.
              Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette. </p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height:"750px"}}>
          <img className="d-block w-100" src={slide3} alt="forest"/>
          <Carousel.Caption style={{top: "10px", bottom:"0", color: "black"}}>
              <h3>Gallery</h3>
              <p>Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette.Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette.
              Raw denim whatever you probably haven't heard of them hammock. Seitan fam ramps tote bag pork belly normcore sriracha raclette. </p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Slider