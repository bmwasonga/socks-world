import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocks } from '../../actions/socksActions';
import Socks from '../Socks';
import socks from '../utils/SocksData';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSocks());
  }, []);
  return (
    <>
      <div>
        <div className="row">
          {socks.map((sock) => {
            return (
              <div className="col-md-4 d-flex justify-content-center">
                <div className="m-3">
                  <Socks sock={sock} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
