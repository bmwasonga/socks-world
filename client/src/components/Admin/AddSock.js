import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSock } from '../../actions/socksActions';
import Error from '../Error';
import Loading from '../Loading';
import Success from '../Success';

export default function AddSock() {
  const [name, setName] = useState('');
  const [small, setSmall] = useState(0);
  const [medium, setMedium] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const socksState = useSelector((state) => state.getAllSocksReducers);

  const { loading, error, success } = socksState;
  function formControl(e) {
    e.preventDefault();

    const sock = {
      name,
      image,
      description,
      prices: {
        small: small,
        medium: medium,
      },
      category,
    };

    dispatch(addSock(sock));
  }

  return (
    <div className="p-5">
      <h1 className="text-center">Add a new sock</h1>
      <hr />

      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="new Sock has been added" />}
      <form action="">
        <div className="form-group">
          <label>Sock name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name of the new sock"
            value={name}
            onChange={(e) => {
              setName(e.target.value.toUpperCase());
            }}
          />
        </div>

        <div className="form-row">
          <div className="col">
            <label>Small</label>

            <input
              type="text"
              className="form-control"
              placeholder="price for small"
              value={small}
              onChange={(e) => {
                setSmall(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label>Medium</label>

            <input
              type="text"
              className="form-control"
              placeholder="price for medium"
              value={medium}
              onChange={(e) => {
                setMedium(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Desription</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Image Url</label>
          <input
            type="text"
            className="form-control"
            id="imageurl"
            placeholder="the image link"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="item category(male/female)"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary" type="submit" onClick={formControl}>
          Add Sock
        </button>
      </form>
    </div>
  );
}
