import React from 'react';
import "./style.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import EmailForm from '../../components/EmailForm';




const Signup = () => {
  return (
    <div>
      <MainNav />
      <Container 
        fluid="sm"
        className="d-flex contain-height justify-content-center align-items-center"
      >
        <Row >
          <Col>
            <MyCard header={"Signup"} />    
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Signup;