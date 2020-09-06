import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/loginActions';
import * as actionDetailTypes from '../../store/actions/userDetailsActions';
import API from '../../utils/API';

const LoginForm = props => {

  const getAuthenticatedUser = res => {
    props.getFirstName(res);
    props.getLastName(res);
    props.getFullName(res);
    props.getEmail(res);
    props.getID(res);
  }

  const handleSubmit = e => {
    e.preventDefault();

    let userData = {
      email: props.email,
      password: props.password
    };
    API.authenticateUser(userData)
      .then(res => {
        
        console.log('authenticated User res.data: ', res.data);
        getAuthenticatedUser(res);
        
      })
      .catch(err => {
        alert('There was an error with your email or password.');
        console.log(err.response.data);
        return;
      })
      .then(() => {
        props.setHomeRedirect();
      });
  };

  const LoginBtn = () => {
    return (
      <Button variant="primary" type="submit">Login</Button>
    );
  };

  const DisabledBtn = () => {
    return (
      <Button variant="outline-primary" disabled>Login</Button>
    );
  };

  return (
    <div>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Enter Email"
            onChange={props.writeEmail}
            value={props.email}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Enter Password"
            onChange={props.writePassword}
            value={props.password}
          />
        </Form.Group>
        {props.email !== "" && props.password !== "" ? <LoginBtn /> : <DisabledBtn />}
      </Form>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    firstName: state.userDetails.firstName,
    lastName: state.userDetails.lastName,
    authEmail: state.userDetails.authEmail,
    fullName: state.userDetails.fullName,
    id: state.userDetails.id,
    dateCreated: state.userDetails.dateCreated,
    lastUpdated: state.userDetails.lastUpdated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    writeEmail: e => dispatch({
      type: actionTypes.WRITE_LOGIN_EMAIL,
      value: e.target.value
    }),
    writePassword: e => dispatch({
      type: actionTypes.WRITE_LOGIN_PASS,
      value: e.target.value
    }),
    setHomeRedirect: () => dispatch({
      type: actionTypes.SET_HOME_REDIRECT
    }),
    getFirstName: res => dispatch({
      type: actionDetailTypes.GET_FIRSTNAME,
      value: res.data.firstName
    }),
    getLastName: res => dispatch({
      type: actionDetailTypes.GET_LASTNAME,
      value: res.data.lastName
    }),
    getFullName: res => dispatch({
      type: actionDetailTypes.GET_FULLNAME,
      value: res.data.fullName
    }),
    getEmail: res => dispatch({
      type: actionDetailTypes.GET_AUTH_EMAIL,
      value: res.data.email
    }),
    getID: res => dispatch({
      type: actionDetailTypes.GET_ID,
      value: res.data._id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
