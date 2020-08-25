import React from 'react';
import "./style.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const MyCard = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyCard;