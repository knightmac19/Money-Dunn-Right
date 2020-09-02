import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import { connect } from 'react-redux';



const Home = props => {

  return (
    <div>
      {/* {props.redirectToLogin ? <Redirect to="/Login" /> : null} */}

      <MainNav />
      <Container 
        fluid="sm"
        className="d-flex contain-height justify-content-center align-items-center"
      >
        <Row >
          <Col>
            <MyCard 
              header={"Home"} 
              content={""}
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
    // redirectToLogin: state.signup.redirectToLogin
  };
}

export default connect(mapStateToProps)(Home);