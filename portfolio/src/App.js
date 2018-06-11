import React, { Component } from 'react';
import './App.css';
import Links from './Links';
import Discription from './Discription';
import Projects from './Projects';
import Contacts from './Contact';
import About from './About';
// import profilePicture from './images/profilepicture.JPG';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Links/>
        <header>
          <h1 className='navbar'>Jovan Georgievski</h1>
        </header>
        <Discription />
        <Projects />
        <Contacts />
        <About/>
      </div>
    );
  }
}

export default App;
