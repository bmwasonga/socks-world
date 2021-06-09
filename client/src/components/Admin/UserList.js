import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';

import { getAllUsers } from '../../actions/userActions';
import { getAllUsersReducer } from '../../reducers/userReducers';

import Error from '../Error';
import Loading from '../Loading';

export default function UserList() {
  const dispatch = useDispatch();

  const usersState = useSelector((state) => state.getAllUsersReducer);

  const { loading, error, users } = usersState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h1 className="text-center">My customers</h1>

      {error && <Error error="something went wrong" />}
      {loading && <Loading />}

      <table className="table table-borderd">
        <thead className="thead-dark">
          <tr>
            <th>User ID</th>
            <th>name </th>
            <th>Date joined</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <AiFillDelete style={{ color: 'red' }} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
