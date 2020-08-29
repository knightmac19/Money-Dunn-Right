import React from 'react';
import "./style.css";
import { Container, Row, Col, Card } from 'react-bootstrap';



const MyCard = props => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="no-padding">
            <Card className="text-center bg-dark">
              <Card.Header className="  text-white bg-primary my-card-header">{props.header}</Card.Header>
              <Card.Body className="bg-light">
                {props.content}
              </Card.Body>
              <Card.Footer className="text-muted">{props.textMuted}</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyCard;