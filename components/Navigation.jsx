import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


const Navigation = () => (
  <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrap</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
   
  </Nav>
</Navbar>
);

export default Navigation;
