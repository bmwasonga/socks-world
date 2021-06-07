import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions/userActions';
import Error from '../Error';
import Loading from '../Loading';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  function login() {
    const user = { email, password };
    console.log('the user is', user);
    dispatch(userLogin(user));
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <Form className="shadow p-3 mb-5 bg-white rounded">
            <h3>Login</h3>
            <hr />
            {loading && <Loading />}
            {error && <Error error="invalid credentials" />}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button className="mb-3" variant="primary" onClick={login}>
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
