import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import EntryFormContainer from './component/EntryFormContainer';
import PersonalInfo from './component/PersonalInfo';
import Journal from './component/Journal';

/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 * TODO : change current page when page changes (auth, journal, profile)
 */

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      userAuth:false,
      user:
      {
        email:"",
        username:"",
        password:""
      },
      currentPage:"auth"
    };
    this.changeAuth = this.changeAuth.bind(this);
    this.setUser = this.setUser.bind(this);
  }
  changeAuth()
  {
    this.setState({userAuth: !this.state.userAuth});
  }
  setUser(User)
  {
    this.setState(
      {
        user:
        {
          email:User.email,
          username:User.username,
          password:User.password
        }
      });
  }
  render() {
    // console.log('app state');
    // console.log(this.state);
    let nav;
    let personalInfo;
    let journal;
    let formContainer;
    if (this.state.userAuth)
    {
      nav = <Navbar />;
      personalInfo = <PersonalInfo user={this.state.user}/>;
      journal = <Journal user={this.state.user}/>;
    }
    else
    {
      formContainer = <EntryFormContainer changeAuth={this.changeAuth} setUser={this.setUser}/>; 
    }
    return (
      <div className="App">
      {/* TODO : make this menu show the link for the other page */}
        {nav}
        {personalInfo}
        {journal}
        {formContainer}
        {/* <header className="App-header">
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
        </header> */}
      </div>
    );
  }
}

export default App;
