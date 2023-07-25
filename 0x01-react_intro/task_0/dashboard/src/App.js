import logo from './Holberton_logo.jpg';
import './App.css';

function App() {
  return (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title'>School dashboard</h1>
        
      </header>
      <body className='App-body'>
      <hr className='bar'></hr>
        <p>Login to access the full dashboard</p>
      </body>
      <footer className='App-footer'>
      <hr className='bar'></hr>
        <p><em>Copyright 2020 - holberton School</em></p>
      </footer>
    </div>
   
  );
}

export default App;
