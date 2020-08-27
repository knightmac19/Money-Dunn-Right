import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MainNav = props => {
  return (
    <Navbar bg="primary" variant="dark" fixed="top" expand="md">
      <Navbar.Brand href="#home">MDR · Money Dunn Right</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/Signup">Signup</Nav.Link>
        <Nav.Link href="/Login">Login</Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
};

export default MainNav;
