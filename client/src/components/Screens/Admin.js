import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route, Link } from 'react-router-dom';
import AddSock from '../Admin/AddSock';
import OrderList from '../Admin/OrderList';
import SocksList from '../Admin/SocksList';
import UserList from '../Admin/UserList';

export default function Admin() {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10 ">
          <h4 className=" text-center ">This is the admin page</h4>
          <hr />

          <ul className="adminfunctions">
            <li className="">
              <Link to="/admin/userlist"> User List</Link>
            </li>
            <li className="">
              <Link to="/admin/socklist">Socks List</Link>
            </li>
            <li className="">
              <Link to="/admin/addsock">Add sock</Link>
            </li>
            <li className="">
              <Link to="/admin/orderlist">Order List</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/admin" element={<UserList />} />

            <Route path="/admin/userlist" element={<UserList />} />
            <Route path="/admin/socklist" element={<SocksList />} />
            <Route path="/admin/addsock" element={<AddSock />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
