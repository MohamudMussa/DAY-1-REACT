'use strict';

import logo from './images/newlogo.png';
import './App.css';
import Introduction from './Components/day 1/first';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="My Logo" />
        <p>
          I'm going to build my CV by just using React
        </p>
        <Introduction> </Introduction>
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
