import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

function NavbarComponent() {
  const { store } = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-light mb-3 p-5 pb-2 pt-1">
        <Link to={"/"}>
          <Navbar.Brand><img src='https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png' height={"50px"}/></Navbar.Brand>
        </Link>
        <div className='ml-auto'>
      <DropdownButton id="dropdown-basic-button" title={"Favorites " + store.fav.length} >
        {store.fav.map((item,i)=>{
          return(
            <Dropdown.Item>{item}</Dropdown.Item>
          )
        })}
      </DropdownButton>
        </div>
    </nav>
  );
}

export default NavbarComponent;