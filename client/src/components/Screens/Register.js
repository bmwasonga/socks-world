import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/userActions';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const dispatch = useDispatch();

  //function that accepts registration and
  function register() {
    if (password !== cpassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <h3>Register</h3>
            <hr />
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => {
                  setCpassword(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Button variant="primary" onClick={register}>
              Register
            </Button>
            <br />
            <a style={{ color: 'black' }} href="/login">
              Click here if already member
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
}
