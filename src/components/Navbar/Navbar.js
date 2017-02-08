import React from "react";
import AppBar from "material-ui/AppBar/AppBar";
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import setUser from "../../actions/setUser";

import axios from "axios";

class Navbar extends React.Component {
  logout() {
    this.props.setUser(null);
    browserHistory.push("/login")
  }

  render() {
    return (
      <AppBar style={{background:"transparent", boxShadow:"none"}} showMenuIconButton={false}  onLeftIconButtonTouchTap={this.props.handleToggle}>
        {this.props.user.username ?
          <span style={{marginTop:9}}>
            <span className="appbar-text" onClick={this.logout.bind(this)}>Logout {this.props.user.username}</span>
            <span className="appbar-icon"><Link to="/notes/add" activeStyle={{ color: '#ff6600' }}><i className="fa fa-plus" aria-hidden="true"></i></Link></span>
          </span>
          : <span className="appbar-text" >
          <span className="appbar-text"><Link to="/login" activeStyle={{ color: "#ff6600" }}>Login</Link></span>
          <span className="appbar-text"><Link to="/register" activeStyle={{ color: "#ff6600" }}>Register</Link></span>
          </span>
        }
        <span className="appbar-icon blue"><Link to="/" activeStyle={{ color: '#ff6600' }}><i className="fa fa-home" aria-hidden="true"></i></Link></span>
        <span className="appbar-text"><Link to="/notes/all">View All</Link></span>
      </AppBar>
    )

  }
}

function logout() {
  console.log("hi")
  axios.get("http://pacific-everglades-32525.herokuapp.com/logout").then(() => {
    console.log("logged off")
  }).catch(e => console.log(e));
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
