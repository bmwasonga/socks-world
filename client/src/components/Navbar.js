/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiCart } from 'react-icons/bi';
import { logOutUser } from '../actions/userActions';

export default function Navbar() {
  //to access the state of the cart button

  const cartState = useSelector((state) => state.cartReducer);
  const usersState = useSelector((state) => state.loginUserReducer);

  const { currentUser } = usersState;
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <a className="navbar-brand font-weight-bold" href="/">
          SOCKS GLOBE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BiCart /> {cartState.cartItems.length}
          {/* This is what apears on small screens   */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <div className="dropdown show">
                <a
                  className="btn dropdown-toggle link-success"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      dispatch(logOutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  {/* the href will change to that of the login page */}
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
