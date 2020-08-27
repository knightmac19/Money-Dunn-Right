import React from 'react';
import "./style.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import EmailForm from '../EmailForm';


const MyCard = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="no-padding">
            <Card className="text-center bg-dark">
              <Card.Header className="  text-white bg-primary my-card-header">{props.header}</Card.Header>
              <Card.Body className="bg-light">
                <EmailForm />
              </Card.Body>
              <Card.Footer className="text-muted">MDR</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyCard;