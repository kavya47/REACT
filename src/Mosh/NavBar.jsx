import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar {this.props.totalCount}
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
