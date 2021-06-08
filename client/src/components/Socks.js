import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function Socks({ sock }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('small');
  //useEffect for the Modal
  const [show, setShow] = useState(false);

  // the below functions control the show and hide status of the modal component that displays more information on the socks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //code below handles the functionality of adding items to the cart
  const dispatch = useDispatch();
  function addItemToCart() {
    dispatch(addToCart(sock, size, quantity));
    // the params in the same order from the Add to Cart function in the cart actions
  }
  return (
    <div
      style={{ padding: '40px' }}
      className="shadow p-5 mb-8 bg-white rounded"
    >
      {/* add a hover option to increase the intensity of the shadow on hover*/}
      <div onClick={handleShow}>
        <h5>{sock.name}</h5>
        <img
          src={sock.image}
          alt={sock.name}
          style={{ width: '200px', height: '200px' }}
          className="img-fluid "
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Sizes</p>
          <select
            className="form-control"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            {sock.sizes.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity:</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((a, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p className="mt-1">Price: {sock.prices[0][size] * quantity}Ksh</p>
        </div>
        <div className="m-1 w-100">
          <button
            type="button"
            className="btn btn-danger mt-1"
            onClick={addItemToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* the modal below will only display when the user clicks on a sock
          the modal will contain the detailed information of the sock
      */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{sock.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={sock.image} alt={sock.name} className="img-fluid" />
          <p>{sock.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
