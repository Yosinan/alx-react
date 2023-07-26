import logo from './Holberton_logo.jpg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils.js';

function App() {
  return (
    <>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='title'>School dashboard</h1>
    </div>
    <div className='App-body'>
      <p>Login to access the full dashboard</p>
    </div>
    <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  </>
  );
}

export default App;
