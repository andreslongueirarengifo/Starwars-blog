import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function NavbarComponent() {
  return (
    <nav className="navbar navbar-light bg-light mb-3 p-5 pb-2 pt-1">
        <Link to={"/"}>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>
        <div className='ml-auto'>
          <Button variant="primary">Primary</Button>
        </div>
    </nav>
  );
}

export default NavbarComponent;