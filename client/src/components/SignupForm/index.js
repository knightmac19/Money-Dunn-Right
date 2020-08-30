import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";
import { connect } from 'react-redux';

const SignupForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstEmail, setFirstEmail] = useState("");
  const [hasEmail, setHasEmail] = useState();
  const [secondEmail, setSecondEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [hasPassword, setHasPassword] = useState();

  // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const validateEmail = (email) => {

  };

  const validatePassword = () => {

  };

  const InvalidEmail = () => {
    return (
      <Form.Text className="text-danger">
        Invalid Email
      </Form.Text>
    );
  };

  const InvalidPassword = () => {
    return (
      <Form.Text className="text-danger">
        Invalid Password
      </Form.Text>
    );
  };

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

  const handleSubmit = () => {
    console.log("handling submit")
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter First Name" 
            onChange={e => setFirstName(e.target.value)}
            value={props.firstName}
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="input" 
            placeholder="Enter Last Name" 
            onChange={e => setLastName(e.target.value)}
            value={props.lastName}
          />
        </Form.Group>
        <Form.Group controlId="firstEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={e => { setFirstEmail(e.target.value); setHasEmail(true)} }
            value={props.email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {hasEmail ? 
          (
            <Form.Group controlId="secondEmail">
              <Form.Label>Re-enter Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={e => setSecondEmail(e.target.value)}
                value={secondEmail}
              />
            </Form.Group>
          ) 
        : null}

        {secondEmail !== "" && firstEmail !== secondEmail ? <EmailsDontMatch /> : null}


        {secondEmail !== "" && firstEmail === secondEmail ? (
            <div>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Password" 
                  onChange={e => {setPassword(e.target.value); setHasPassword(true)} }
                  value={password}
                />
              </Form.Group>

              <Form.Group controlId="rememberUserCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
            </div>
          ) 
        : null}

        {hasPassword ? <SignupButton /> : null}

      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password
  };
};

export default connect(mapStateToProps)(SignupForm);