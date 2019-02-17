import React, { Component } from 'react';

class Navbar extends Component {
  render() {
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
                <a className="nav-link" href="#">Other Page <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Logout </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
