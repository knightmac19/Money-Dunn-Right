import React, { useState } from 'react';
import "./style.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import SignupForm from '../../components/SignupForm';




const Signup = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  return (
    <div>
      {redirectToLogin ? <Redirect to="/Login" /> : null}

      <MainNav />
      <Container 
        fluid="sm"
        className="d-flex contain-height justify-content-center align-items-center"
      >
        <Row >
          <Col>
            <MyCard 
              header={"Signup"} 
              content={<SignupForm />}
              textMuted={"MDR"}
            />    
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Signup;