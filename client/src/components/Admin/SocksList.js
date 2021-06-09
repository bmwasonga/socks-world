import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Loading from '../Loading';
import Error from '../Error';
import { getAllSocks } from '../../actions/socksActions';

export default function PizzaList() {
  const dispatch = useDispatch();
  const socksState = useSelector((state) => state.getAllSocksReducers);

  const { loading, error, socks } = socksState;

  useEffect(() => {
    dispatch(getAllSocks());
  }, [dispatch]);

  return (
    <div>
      <h4 className="text-center">This is the list of Socks</h4>

      {loading && <Loading />}
      {error && <Error error="something went wrong" />}

      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {socks &&
            socks.map((sock, i) => {
              return (
                <tr key={i}>
                  <td>{sock.name}</td>
                  <td>
                    Small: {sock.prices[0]['small']}
                    <br />
                    Medium: {sock.prices[0]['medium']}
                  </td>
                  <td>{sock.category}</td>
                  <td className="d-flex justify-content-around">
                    <AiFillDelete />
                    <AiFillEdit />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
