import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Brainflix from './components/Brainflix/Brainflix';

function App() {
  return (
    <div className="App">
	  <Header />
	  <Brainflix />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
