import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/Screens/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
