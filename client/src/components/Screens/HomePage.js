import React from 'react';
import Socks from '../Socks';
import socks from '../utils/SocksData';

export default function HomePage() {
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
