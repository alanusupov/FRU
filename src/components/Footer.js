import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { AiFillFacebook, AiFillTwitterSquare, AiFillBehanceCircle } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const FooterPage = () => {
  return (
    <MDBFooter style={{background: 'black'}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 style={{color: 'white'}} className="title">Follow Us</h5>
            <p style={{color: 'white'}}>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 style={{color: 'white'}} className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com">FaceBook <AiFillFacebook/></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/fru.heritage/?hl=en">Instagram<FaInstagramSquare/></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.twitter.com">Twitter <AiFillTwitterSquare /></a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.behance.net">Behance <AiFillBehanceCircle /></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> FRU. Heritage </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;