'use strict';

import logo from './images/newlogo.png';
import './App.css';
import Introduction from './Components/day 1/first';
import Second from './Components/day 1/Second';
import FirstParagraph from './Components/day 1/info';

import PropsDiff from './Components/day 1/Prop/Intermediate/PropsDiff'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="My Logo" />
        <p>
          I'm going to build my CV by just using React
        </p>
        <Introduction> </Introduction>
        <Second></Second>
        <FirstParagraph> </FirstParagraph>
        <PropsDiff></PropsDiff>
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
