import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      empty:""
    };
  }
  render() {
    // console.log('current page');
    // console.log(this.props.currentPage);
    let otherPage;
    switch(this.props.currentPage)
    {
      case "auth":
        this.props.setPage("journal");
      case "journal":
        otherPage = "profile";
        break;
      case "profile":
        //this.props.setPage("profile");
        otherPage = "journal";
        break;
    }
    //let otherPage = (this.props.currentPage == "journal") ? "profile" : "journal";
    return (
      <div>
      {/* TODO : make this menu show the link for the other page */}
        <nav className="navbar  navbar-dark bg-dark">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={() => this.props.setPage(otherPage)}> (coming soon) <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.props.changeAuth}>Logout </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
