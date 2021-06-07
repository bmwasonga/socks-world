import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocks } from '../../actions/socksActions';
import Error from '../Error';
import Loading from '../Loading';
import Socks from '../Socks';
//import socks from '../utils/SocksData';
// the above line is mo longer needed as we are getting data from MongoDB

export default function HomePage() {
  const dispatch = useDispatch();
  const socksState = useSelector((state) => state.getAllSocksReducers);

  const { loading, error, socks } = socksState;
  //console.log('socks is', socks); uncomment to see the values of the socks before render

  useEffect(() => {
    dispatch(getAllSocks());
  }, [dispatch]);

  return (
    <>
      <div className="row justify-content-center">
        {/* conditional renderring to determine loading, data fetch success or fail 
              remeber to style the loading text at some point 
          */}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong!!" />
        ) : (
          socks &&
          socks.map((sock) => {
            return (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={sock._id}
                id={sock._id}
              >
                <div className="m-3">
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
