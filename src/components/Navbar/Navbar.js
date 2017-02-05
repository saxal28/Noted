import React from "react";
import AppBar from "material-ui/AppBar/AppBar";
import { Link } from "react-router";

const Navbar = (props) => {
  return (
    <AppBar style={{background:"transparent", boxShadow:"none"}} showMenuIconButton={false}>
      <span className="appbar-icon"><Link to="/add" activeStyle={{ color: "#ff6600" }}><i className="fa fa-plus" aria-hidden="true"></i></Link></span>
      <span className="appbar-icon blue"><Link to="/" ><i className="fa fa-home" aria-hidden="true"></i></Link></span>
      <span className="appbar-text"><Link to="/all" activeStyle={{ color: "#ff6600" }}>View All</Link></span>
    </AppBar>
  )
}

export default Navbar;
