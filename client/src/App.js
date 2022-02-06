/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Screens/HomePage';

import Footer from './components/footer/Footer';
import Cart from './components/Screens/Cart';
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';
import Orders from './components/Screens/Orders';
import Admin from './components/Screens/Admin';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
