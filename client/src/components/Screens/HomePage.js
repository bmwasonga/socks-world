import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocks } from '../../actions/socksActions';
import Socks from '../Socks';
import socks from '../utils/SocksData';

export default function HomePage() {
  const dispatch = useDispatch();
  const socksState = useSelector((state) => state.getAllSocksReducers);

  const { error, loading } = socksState;

  useEffect(() => {
    dispatch(getAllSocks());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        {/* conditional renderring to determine loading, data fetch success or fail 
              remeber to style the loading text at some point 
          */}
        {loading ? (
          <h1>Loading this header </h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          socks.map((sock, idx) => {
            return (
              <div className="col-md-4 d-flex justify-content-center">
                <div className="m-3" key={socks.id}>
                  <Socks sock={sock} />

                  {/* add ID to give unique numbers for each item  */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
