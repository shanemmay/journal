import React, { Component } from 'react';
import axios from 'axios';
import SwipeableViews from 'react-swipeable-views';
/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 * TODO : change current page when page changes (auth, journal, profile)
 */

class EntrySwiper extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      entries:[]
    };
    this.getEntries = this.getEntries.bind(this);
    this.setEntriesForSwiper = this.setEntriesForSwiper.bind(this);
  }
  getEntries()
  {
    //get entries
    const url = `https://backend-services.herokuapp.com/journalRoot/getEntries?email=${this.props.user.email}&username=${this.props.user.email}`;
    let entries = [];
    //had to make this variable because I can't call this.setEntriesFroSwiper in axios because 'this' isn't defined there
    let setEntries = this.setEntriesForSwiper; 
    axios.get(url)
    .then(function (res) 
    {
        // handle success
        console.log('get entries res');
        console.log(res);
        entries = res.data.results;
        setEntries(entries);
    })
    .catch(function (error) 
    {
        // handle error
        console.log(error);
    })
    .then(function () 
    {
        // always executed
       
    });      
  }
  setEntriesForSwiper(entries)
  {
    //set state
    entries = entries.map(e => 
    {
        return(
        <div key={e.time} className="card">{e.entry}</div>
        );
    });
    //this is to stop an infinite cycle for new users
    if(entries.length > 0)
    {
        this.setState({entries:entries});
    }
  }
  render() 
  {
      if(this.state.entries.length < 1)
      {
        this.getEntries();
      }
        
      console.log('EntrySwiper : state entries');
      console.log(this.state.entries);
    return (
      <div>
          <SwipeableViews>
              {/* divs go here */}
              {this.state.entries}
          </SwipeableViews>
      </div>
    );
  }
}

export default EntrySwiper;
