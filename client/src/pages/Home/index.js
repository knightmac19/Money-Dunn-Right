import React from 'react';
import './style.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import MyCard from '../../components/MyCard';
import MainNav from '../../components/MainNav';
import { connect } from 'react-redux';

const Home = props => {
  
  const UserInfo = props => {
    return (
      <div>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>1</td>
                <td>First Name</td>
                <td>{props.userFirst}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Last Name</td>
                <td>{props.userLast}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ID</td>
                <td>{props.userID}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Email</td>
                <td>{props.userEmail}</td>
              </tr>
            </tbody>
          </Table>
      </div>
      
    );
  };

  return (
    <div>
      {/* {!props.authenticatedID ? <Redirect to="/Login" /> : <div> */}
  
      <MainNav />
      <Container 
        fluid="sm"
        className="d-flex contain-height justify-content-center align-items-start my-container"
      >
        <Row className="my-row">
          <Col>
            <div className="my-col-background">
              <p className="text-white">Column 1.5</p>
            </div>
          </Col>
          <Col md={9}>
            <div className="my-col-background">
              <p className="text-white">Column 9</p>
            </div>    
          </Col>
          <Col>
            <div className="my-col-background">
              <p className="text-white">Column 1.5</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* </div>} */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticatedID: state.userDetails.id,
    firstName: state.userDetails.firstName,
    lastName: state.userDetails.lastName,
    email: state.userDetails.authEmail
    // redirectToLogin: state.signup.redirectToLogin
  };
};

export default connect(mapStateToProps)(Home);