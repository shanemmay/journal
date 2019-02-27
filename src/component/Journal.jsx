import React, { Component } from 'react';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import EntrySwiper from './EntrySwiper';

/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 * TODO : change current page when page changes (auth, journal, profile)
 */

class Journal extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      entry:""
    };
    this.setEntry = this.setEntry.bind(this);
    this.saveEntry = this.saveEntry.bind(this);
    this.showErrorNotification = this.showErrorNotification.bind(this);
    this.showSuccessNotification = this.showSuccessNotification.bind(this);
  }
  setEntry(e)
  {
      this.setState({entry:e.target.value});
  }
  saveEntry(e)
  {
      // console.log('user in journal');
      // console.log(this.props.user);
      let user = this.props.user;
      let regex = /[a-zA-Z]+/g;
      // console.log('entry');
      // console.log(this.state.entry);
      if( this.state.entry.match(regex) != null)
      {
        // console.log(`https://backend-services.herokuapp.com/journalRoot/saveEntry?email=${user.email}&username=${user.username}&password=${user.password}&entry=${this.state.entry}&timestamp=${new Date()}&longitude=${1}&latitude=${1}`);
        axios.get(`https://backend-services.herokuapp.com/journalRoot/saveEntry?email=${user.email}&username=${user.username}&entry=${this.state.entry}&time=${new Date()}&longitude=${1}&latitude=${1}`)
        .then( (res) =>
        {
            console.log("success");
            console.log(res);
            this.showSuccessNotification();
            this.setState({entry:""});
        })
        .catch( (err) =>
        {
            console.log("error");
            console.log(err);
            this.showErrorNotification("Failed to save!");
        })
        .then( () =>
        {
            console.log('save entry should be finished');
        });
      }
      else
      {
        console.log('show empty entry error');
        this.showErrorNotification();
      }
      e.preventDefault();
  }
  showErrorNotification(str = "")
  {
      str = (str.length > 0) ? str : "Entry is empty!";
      return NotificationManager.error(str,"Error!",3000);
  }
  showSuccessNotification(str = "")
  {
       str = (str.length > 0) ? str : "Memory saved!";
      return NotificationManager.success(str,"Success!",3000);
  }
  render() {
    return (
      <div>
<NotificationContainer />
{/* <div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div className="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div> */}
        <form>
            <div className="form-group">
                {/* <label id="journal_label" htmlFor="journal">Entry</label> */}
                <textarea className="form-control" id="journal" rows="7" onKeyUp={this.setEntry} onChange={this.setEntry} value={this.state.entry}></textarea>
                <button className="btn btn-outline-primary" onClick={this.saveEntry}>Save</button>
            </div>
            
            <div>
              <h4 >Read Entries</h4>
              <EntrySwiper user={this.props.user} />
            </div>
        </form>
      </div>
    );
  }
}

export default Journal;
