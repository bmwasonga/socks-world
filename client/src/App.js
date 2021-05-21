import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/Screens/HomePage';
import Footer from './components/footer/Footer';
import Cart from './components/Screens/Cart';
import Login from './components/Screens/Login';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
