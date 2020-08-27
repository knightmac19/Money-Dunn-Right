import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css";

const EmailForm = props => {
  const [firstEmail, setFirstEmail] = useState("");
  const [hasEmail, setHasEmail] = useState();
  const [secondEmail, setSecondEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [hasPassword, setHasPassword] = useState();

  const firstEmailChange = e => {
    setFirstEmail(e.target.value);
    setHasEmail(true);
  };

  const secondEmailChange = e => {
    setSecondEmail(e.target.value);
  };

  const passwordChange = e => {
    setPassword(e.target.value);
    setHasPassword(true);
  };

  const SecondEmailFormGroup = () => {
    return (
      <Form.Group controlId="secondEmail">
        <Form.Label>Re-enter Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange={secondEmailChange}
          value={secondEmail}
        />
      </Form.Group>
    );
  };

  const EmailsDontMatch = () => {
    return (
      <Form.Text className="text-danger">
          Emails Don't Match
      </Form.Text>
    );
  };

  const PasswordFormGroup = () => {
    return (
      <div>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            placeholder="Password" 
            onChange={passwordChange}
            value={password}
          />
        </Form.Group>

        <Form.Group controlId="rememberUserCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
      </div>
    );
  };  

  const SignupButton = () => {
    return (
      <Button variant="primary" type="submit">
        Signup
      </Button>
    );
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="firstEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={firstEmailChange}
            value={firstEmail}
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
                onChange={secondEmailChange}
                value={secondEmail}
              />
            </Form.Group>
          ) 
        : null}
        
        
        {/* { hasEmail ? <SecondEmailFormGroup /> : null} */}
        {secondEmail !== "" && firstEmail !== secondEmail ? <EmailsDontMatch /> : null}

        {secondEmail !== "" && firstEmail === secondEmail ? (
            <div>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="Password" 
                  onChange={passwordChange}
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

export default EmailForm;