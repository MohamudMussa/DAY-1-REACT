'use strict';

import logo from './images/newlogo.png';

import todo from './images/todo.jpg';
import jar from './images/jar.PNG';
import google from './images/google.PNG';
import './App.css';
import Introduction from './Components/day 1/first';
import Second from './Components/day 1/Second';
import FirstParagraph from './Components/day 1/info';
import PeopleTest from './Components/day 1/Prop/Intermediate/People'
import Mydetails from './Components/day 1/Mydetails';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Myprogress from './Components/Myprogress';
import Hobbies from './Components/Hobbies';
import Counter from './Components/Counter';
import Movies from './Components/Movies';


import React from 'react';
import Container from '@material-ui/core/Container';

import PropsDiff from './Components/day 1/Prop/Intermediate/PropsDiff'
import ProductManager from './Components/Exercise/ProductManger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="My Logo" />

        <script type="text/javascript" src="/le-mtagconfig.js"></script>



        <React.Fragment>

          <Container fixed>
{/* 
            <Movies></Movies>

            <Counter></Counter> */}


        {/* <ProductManager/> */}








          <GitHubIcon fontSize="large"></GitHubIcon>
          <div>
            <a
              className="App-link"
              href="https://github.com/MohamudMussa/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              GitHub Link
        </a>
        </div>
  



            <div className="Grey">

              
              <Second></Second>
            </div>

   

            <Introduction> </Introduction>

            <a
              className="App-link"
              href="https://www.linkedin.com/in/mohamud-mussa-76272083/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              LinkedIn
        </a>


            <FirstParagraph> </FirstParagraph>
            <h1 className = "spacer"> ... </h1>
            <Mydetails> </Mydetails>
            <PropsDiff></PropsDiff>
            <h1 className = "spacer"> ... </h1>

            <PeopleTest></PeopleTest>
     
            <img src={todo} className="projectImages" alt="My Logo" />

          <h1>My Hobbies</h1>
          <Hobbies></Hobbies>

          <h1 className = "spacer"> ... </h1>

          </Container>
        </React.Fragment>


   

      </header>
    </div>
  );
}

export default App;
