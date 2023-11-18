import { Navbar, Nav, Container } from "react-bootstrap"
import {Outlet, Link} from 'react-router-dom'

import  './Menu.css'
 import logo from '../../assets/logo-owoko.webp' 
 

const Menu = () => {
  return (
    <>
   
    <Navbar expand="lg" className="bg-ppal">
      <Container>
        <Navbar.Brand as = {Link} to="/">    <img
          src={logo}
          width="150"           
          className="d-inline-block align-top"
          alt="Logo"
        /> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto navBarNav-ppal">
            <Nav.Link as = {Link} to="/" className="rojo">Home</Nav.Link>
            <Nav.Link as = {Link} to="/Contact">Contacto</Nav.Link>
            <Nav.Link as = {Link} to="/Sucursales">Sucursales</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
    </>
  );
}

export default Menu