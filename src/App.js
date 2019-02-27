import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import EntryFormContainer from './component/EntryFormContainer';
import PersonalInfo from './component/PersonalInfo';
import Journal from './component/Journal';
import EntryViewContainer from './component/EntryViewerContainer';

/**
 * FOR SWIPPING : https://react-swipeable-views.com/demos/demos/
 * INFO : to deploy to github pages run $ npm run deploy
 * INFO : notifications info https://www.npmjs.com/package/react-notifications
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
      currentPage:"auth" //journal , profile
    };
    this.changeAuth = this.changeAuth.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  changeAuth()
  {
    this.setState({userAuth: !this.state.userAuth});
  }
  setUser(User = null)
  {
    if(User == null)
    {
      console.log('setuser reached');
      return;
    }
    console.log('setuser called. user :');
    console.log(User);
    this.setState(
      {
        userAuth:true,
        user:
        {
          email:User.email,
          username:User.username,
          password:User.password
        }
      });
    console.log('setuser finished. user : , state :');
    console.log(this.state.user);
    console.log(this.state)
  }
  setPage(page)
  {
    this.setState({currentPage:page});
  }
  render() {
    console.log('App state');
    console.log(this.state);
    let nav;
    let personalInfo;
    let journal;
    let entryViewContainer;
    let formContainer;
    if (this.state.userAuth)
    {
      nav = <Navbar changeAuth={this.changeAuth} setPage={this.setPage} currentPage={this.state.currentPage}/>;
      personalInfo = <PersonalInfo user={this.state.user}/>;
      if(this.state.currentPage == "journal")
      {
        journal = <Journal user={this.state.user}/>;
      }
      else
      {
        console.log('App : user being sent to entryViewContainer');
        console.log(this.state.user);
        entryViewContainer = <EntryViewContainer user={this.state.user} />
      }
    }
    else
    {
      //this.setPage("auth");
      formContainer = <EntryFormContainer changeAuth={this.changeAuth} setUser={this.setUser}/>; 
    }
    return (
      <div className="App">
      {/* TODO : make this menu show the link for the other page */}
        {nav}
        {personalInfo}
        {journal}
        {entryViewContainer}
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
