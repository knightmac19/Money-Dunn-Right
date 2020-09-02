import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/loginActions';
import API from '../../utils/API';

const LoginForm = props => {

  const handleSubmit = e => {
    e.preventDefault();

    let userData = {
      email: props.email,
      password: props.password
    };
    API.authenticateUser(userData)
      .then(res => {
        // I want a new userData reducer that contains the top-level user data in state
        console.log('authenticated User: ', res.userData);
          // also, actions to query that data (mostly id) 
        // after setting user's data in state, redirect to their homepage
      })
      .catch(err => {
        alert('There was an error with your email or password.');
        console.log(err.response.data);
        return;
      });

    // console.log('loginForm handle submit ', userLogin);
    props.setHomeRedirect();
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
    password: state.login.password
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
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
