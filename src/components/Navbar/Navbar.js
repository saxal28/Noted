import React from "react";
import AppBar from "material-ui/AppBar/AppBar";
import { Link } from "react-router";
import axios from "axios";

const Navbar = (props) => {
  return (
    <AppBar style={{background:"transparent", boxShadow:"none"}} showMenuIconButton={false}  onLeftIconButtonTouchTap={props.handleToggle}>
      <span className="appbar-text"><Link to="/login" activeStyle={{ color: "#ff6600" }}>Login</Link></span>
      <span className="appbar-text"><Link to="/register" activeStyle={{ color: "#ff6600" }}>Register</Link></span>
      <span className="appbar-icon blue"><Link to="/" ><i className="fa fa-home" aria-hidden="true"></i></Link></span>
      <span className="appbar-icon"><Link to="/notes/add" activeStyle={{ color: "#ff6600" }}><i className="fa fa-plus" aria-hidden="true"></i></Link></span>
      <span className="appbar-text"><Link to="/notes/all" activeStyle={{ color: "#ff6600" }}>View All</Link></span>
      <span className="appbar-text" onClick={logout}>Logout</span>

    </AppBar>
  )
}

function logout() {
  console.log("hi")
  axios.get("http://pacific-everglades-32525.herokuapp.com/logout").then(() => {
    console.log("logged off")
  }).catch(e => console.log(e));
}

export default Navbar;
