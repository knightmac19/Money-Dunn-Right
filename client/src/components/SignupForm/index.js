import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/signupActions';

const SignupForm = props => {

  // const InvalidEmail = () => {
  //   return (
  //     <Form.Text className="text-danger">
  //       Invalid Email
  //     </Form.Text>
  //   );
  // };

  // const InvalidPassword = () => {
  //   return (
  //     <Form.Text className="text-danger">
  //       Invalid Password
  //     </Form.Text>
  //   );
  // };

  const EmailsDontMatch = () => {
    return (
      <Form.Text className="text-danger">
          Emails Must Match
      </Form.Text>
    );
  };  

  const SignupButton = () => {
    return (
      <Button variant="primary" type="submit">
        Signup
      </Button>
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    let newUser = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.firstEmail,
      password: props.password
    }
    
    console.log("handling submit");
    console.log("user: ", newUser);
    
    props.setLoginRedirect();
  };

  return (
    <div>
      <Form 
        onSubmit={e => handleSubmit(e)}
      >
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter First Name" 
            onChange={props.writeFirstName}
            value={props.firstName}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter Last Name" 
            onChange={props.writeLastName}
            value={props.lastName}
          />
        </Form.Group>
        <Form.Group controlId="firstEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={props.writeFirstEmail}
            value={props.firstEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {props.hasEmail ? 
          (
            <Form.Group controlId="secondEmail">
              <Form.Label>Re-enter Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={props.writeSecondEmail}
                value={props.secondEmail}
              />
            </Form.Group>
          ) 
        : null}

        {props.secondEmail !== "" && props.firstEmail !== props.secondEmail ? <EmailsDontMatch /> : null}


        {props.secondEmail !== "" && props.firstEmail === props.secondEmail ? (
            <div>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Password" 
                  onChange={props.writePassword}
                  value={props.password}
                />
              </Form.Group>

              {/* <Form.Group controlId="rememberUserCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group> */}
            </div>
          ) 
        : null}

        {props.hasPassword ? <SignupButton /> : null}

      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.signup.firstName,
    lastName: state.signup.lastName,
    firstEmail: state.signup.firstEmail,
    secondEmail: state.signup.secondEmail,
    password: state.signup.password,
    hasEmail: state.signup.hasEmail,
    hasPassword: state.signup.hasPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    writeFirstName: (e) => dispatch({
      type: actionTypes.WRITE_FIRSTNAME,
      value: e.target.value
    }),
    writeLastName: (e) => dispatch({
      type: actionTypes.WRITE_LASTNAME,
      value: e.target.value
    }),
    writeFirstEmail: (e) => dispatch({
      type: actionTypes.WRITE_FIRST_EMAIL,
      value: e.target.value
    }),
    writeSecondEmail: (e) => dispatch({
      type: actionTypes.WRITE_SECOND_EMAIL,
      value: e.target.value
    }),
    writePassword: (e) => dispatch({
      type: actionTypes.WRITE_PASSWORD,
      value: e.target.value
    }),
    setLoginRedirect: () => dispatch({
      type: actionTypes.SET_LOGIN_REDIRECT
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);