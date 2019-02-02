import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/lumen/bootstrap.min.css'

//Components
import Navbar from './Navbar/Navbar.js'
import CardList from './CardList.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar> 
        </Navbar>
        <CardList>

        </CardList>
      </React.Fragment>
    );
  }
}

export default App;
