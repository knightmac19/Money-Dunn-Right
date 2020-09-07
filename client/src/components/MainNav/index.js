import React, { useState } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import API from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faDumpster } from '@fortawesome/free-solid-svg-icons';

const MainNav = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const logout = (props) => {
    console.log('mainNav logout...');
  };

  const updateUser = (props) => {
    console.log('updating user details...');
    handleClose();
  };

  const deleteUser = (props) => {
    console.log('deleting user...')
  };

  const NotAuthenticated = props => {
    return (
      <Navbar bg="primary" variant="dark" fixed="top" expand="md" className=".my-nav">
        <Navbar.Brand href="#home">MDR · Money Dunn Right</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/Signup">Signup</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  };

  const Authenticated = props => {
    return (
      <Navbar bg="primary" variant="dark" fixed="top" expand="md" className=".my-nav">
        <Navbar.Brand href="#home">MDR · Money Dunn Right</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="link" onClick={logout}>Logout</Button>
          <Button variant="secondary" onClick={handleShow}>
            <FontAwesomeIcon icon={faUserCog} />
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            <FontAwesomeIcon icon={faDumpster} />
          </Button>  
        </Nav>
      </Navbar>
    );
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Update User Details Here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateUser}>
            Update User
          </Button>
        </Modal.Footer>
      </Modal>
      {!props.authenticatedID ? <NotAuthenticated /> : <Authenticated />}
      
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    authenticatedID: state.userDetails.id,
    // firstName: state.userDetails.firstName,
    // lastName: state.userDetails.lastName,
    // email: state.userDetails.authEmail
  };
};

export default connect(mapStateToProps)(MainNav);
