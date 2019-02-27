import React, { Component } from 'react';
import axios from 'axios';

/**
 * SHANE once user logs in
 * change state of app to rerender ui as a authuser on journal page
 * TODO : make it so user only needs email of username
 * AXIOS INFO : https://github.com/axios/axios
 * TODO : change current page when page changes (auth, journal, profile)
 */

class EntryViewerContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      entries:[]
    };
    this.getEntries = this.getEntries.bind(this);
  }
  getEntries()
  {
      console.log('getentries url');
    console.log(`https://backend-services.herokuapp.com/journalRoot/getEntries?email=${this.props.user.email}&username=${this.props.user.username}&password=${this.props.user.password}`);
    //axios.get(`https://backend-services.herokuapp.com/journalRoot/getEntries?email=${this.props.user.email}&username=${this.props.user.username}&password=${this.props.user.password}`)
    axios.get(`https://backend-services.herokuapp.com/journalRoot/getEntries?email=${this.props.user.email}&username=${this.props.user.username}`)
    .then( (res) =>
    {
        console.log('get entries success');
        let entries = res.data.entries;
        let entryList = [];
        console.log( (entries) );
        
        for(let i in entries)
        {
            //console.log(entries[i]);
            entryList.push(<li key={entries[i].time}>{entries[i].entry}</li>);
        }
        console.log(entryList);
        this.setState({entries:entryList});
        // const entries = res.data;
        // let list = [];
        // for(let i in entries)
        // {
        //     list.push(entries[i]);
        // }
        // entries = list.map(entry =>
        //     {
        //         console.log(entry);
        //         return <li key={entry.time}>{entry.entry}</li>;
        //     });
        // this.setState({entries:entries});
    })
    .catch( (err) =>
    {
        console.log("error getting entries");
        console.log(err);
    });
  }
  render() {
      if(this.state.entries.length < 1)
        this.getEntries();
      console.log(this.state.entries);
    return (
      <div>
          <ul>{this.state.entries}</ul>
      </div>
    );
  }
}

export default EntryViewerContainer;
