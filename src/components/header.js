import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap'; 
import { Link } from 'react-router-dom';
import logo from '../media/logo.png'


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  var token = localStorage.getItem("token");
  
    const isAuth = token ? true : false
    console.log(isAuth);
  return (
    <div>
    <Navbar className="navbar" color="black" light expand="md">
      <Link to="/base"><img className="logo navbar-brand" src={logo} /></Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link text-white" to="/product">T-Shirts</Link>
          </NavItem>
          <NavItem> 
          <Link className="nav-link text-white" to="/about">About</Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-white" to="/contacts">Contacts</Link>
          </NavItem>
          <NavItem>
          <Link className="nav-link text-white" to="/payment">Payment</Link>
          </NavItem>
        
        </Nav>
        <Link className="nav-link" to="/cart">My Cart  <AiOutlineShoppingCart style={{ fontSize: "20px" , color: 'white'}} /></Link>
         <Link className="nav-link" to="/admin">Admin Panel</Link>
        
       {isAuth !== true ? <Link exact to="/login">Logout</Link> : <Link exact to="/login">Login/Logout</Link>}
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header
