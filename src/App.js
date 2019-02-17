import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import EntryFormContainer from './component/EntryFormContainer';

/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 */

class App extends Component {
  constructor(props)
  {
   


    super(props);
    this.state = 
    {
      userAuth:false,
      currentPage:"auth"
    };
  }
  render() {
    let nav;
    let formContainer;
    if (this.state.userAuth)
    {
      nav = <Navbar />
    }
    else
    {
      formContainer = <EntryFormContainer />; 
    }
    return (
      <div className="App">
      {/* TODO : make this menu show the link for the other page */}
        {nav}
        {formContainer}
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
}

export default App;
