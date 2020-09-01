import React from 'react';
import "./style.css";
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';


const Login = props => {
  
  return (
    <div>
      {props.redirectToHome ? <Redirect to="/Home" /> : null}

      <MainNav />
      <Container 
        fluid="sm"
        className="d-flex contain-height justify-content-center align-items-center"
      >
        <Row >
          <Col>
            <MyCard 
              header={"Login"} 
              content={<LoginForm />}
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
    redirectToHome: state.login.redirectToHome
  };
}

export default connect(mapStateToProps)(Login);