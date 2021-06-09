import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterSocks } from '../actions/socksActions';

export default function Filter() {
  const dispatch = useDispatch();

  const [searchKey, setSearchKey] = useState('');
  const [category, setCategory] = useState('all');

  return (
    <div className="container">
      <div className=" row justify-content-center shadow p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Search Socks"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">all</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              dispatch(filterSocks(searchKey, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
