import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const MainNav = props => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top" expand="md">
      <Navbar.Brand href="#home">MDR · Money Dunn Right</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/Signup">Signup</Nav.Link>
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MainNav;
