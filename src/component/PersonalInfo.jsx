import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import "../css/main.css";
import logo from '../logo.svg';

/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 */

class PersonalInfo extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      empty:""
    };
  }
  render() {
      let profilePic = this.props.user.profilePic;
      if(profilePic == undefined)
        profilePic = logo;
    // console.log("profile pic src");
    // console.log(profilePic);
    return (
      <div >
<div className="jumbotron jumbotron-fluid text-center">
    <div className="container">
        <img src={profilePic} id="profilePic" className="rounded App-logo" alt="profilePic" />
        <h3 id="username">{this.props.user.username}</h3>
        {/* email */}
        {/* change password */}
    </div>
</div>
      </div>
    );
  }
}

export default PersonalInfo;
