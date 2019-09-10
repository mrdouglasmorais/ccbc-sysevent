import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/ccbc_cam_small.png"


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0 nav" >
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
             { /* <img src={ Logo }/> */}
             { /* <i className="material-icons">calendar</i> */} 
             <img src={ Logo } alt="Logo"/>
              { /* SysEvent  */}
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
