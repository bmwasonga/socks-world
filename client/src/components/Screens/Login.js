import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <div>
      <div className="row justify-content-center login">
        <div className="col-md-5">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <h3>Login</h3>
            <hr />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <br />
            <a style={{ color: 'black' }} href="/register">
              Click here if new member
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
}
