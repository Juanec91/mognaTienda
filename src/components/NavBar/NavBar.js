import React from "react";
import './NavBar.css';
import logo from "../../assets/img/logo.png";
import cart from "../../assets/img/Cart.png";
import CartWidget from "../CartWidget/CartWidget";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavBar = () => {

  
  

    return(
        <>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
    <img
          alt=""
          src={logo}
          width="45"
          height="60"
          className="d-inline-block align-top"
        />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/products">Productos</Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Buff</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cuellitos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Riñoneras</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Magnesieras</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home">
    <img
          alt=""
          src={cart}          width="45"
          height="45"
          className="d-inline-block align-top"
        />
    

        
        </Navbar.Brand>
  </Container>
</Navbar>

</>
    )
}


export default NavBar;