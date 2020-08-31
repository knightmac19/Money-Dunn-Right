import React from 'react';
import "./style.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import SignupForm from '../../components/SignupForm';
import { connect } from 'react-redux';


const Signup = props => {

  return (
    <div>
      {props.redirectToLogin ? <Redirect to="/Login" /> : null}

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

const mapStateToProps = state => {
  return {
    redirectToLogin: state.signup.redirectToLogin
  };
}

export default connect(mapStateToProps)(Signup);