import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm going to build my CV by just using React
        </p>
        <a
          className="App-link"
          href="https://github.com/MohamudMussa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </header>
    </div>
  );
}

export default App;
