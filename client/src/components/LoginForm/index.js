import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/loginActions';

const LoginForm = props => {

  const handleSubmit = e => {
    e.preventDefault();

    let userLogin = {
      email: props.email,
      password: props.password
    }

    console.log('loginForm handle submit ', userLogin);
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
