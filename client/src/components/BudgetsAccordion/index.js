import React, { useState } from 'react';
import './style.css';
import { Accordion, Card, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';


const BudgetsAccordion = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createNewBudget = props => {
    
    handleClose();
  };

  return (
    <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createNewBudget}>
            Create Budget
          </Button>
        </Modal.Footer>
      </Modal>

      <Accordion>
        <Card>
          <Card.Header>
            {props.firstName} {props.lastName}'s Budgets
          </Card.Header>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Button className="my-btn" onClick={handleShow}>
              <FontAwesomeIcon icon={faPlusSquare} />
            </Button>  
          </Card.Header>
        </Card>
      </Accordion>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticatedID: state.userDetails.id,
    firstName: state.userDetails.firstName,
    lastName: state.userDetails.lastName,
    email: state.userDetails.authEmail
  };
};

export default connect(mapStateToProps)(BudgetsAccordion);
