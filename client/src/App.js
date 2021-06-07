/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//link and switch have not been used
import HomePage from './components/Screens/HomePage';

import Footer from './components/footer/Footer';
import Cart from './components/Screens/Cart';
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
