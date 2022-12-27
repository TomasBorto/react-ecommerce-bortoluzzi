import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className='body'>
      <div>
      <Navbar />     
    </div>
    <div className='greeting'>
      <ItemListContainer greeting='Bienvenido a SANA SANA' />
    </div>
    </div>
  );
}

export default App;
