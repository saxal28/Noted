import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from "material-ui/AppBar/AppBar";
import { Link, browserHistory } from "react-router";

export default class DrawerSimpleExample extends Component{
  constructor(props) {
    super(props);
    this.state = {open: false, key: 0};
    };

  logout() {
    this.props.setUser(null);
    browserHistory.push("/login")
  }

  handleToggle = () => this.setState({open: !this.state.open});

  getKey(index) {
    var key = index.index;
    this.setState({key}, () => {
        this.props.selectNote(key)
    })
  };

  render() {
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.handleToggle.bind(this)} style={{background:"transparent", boxShadow:"none"}}>
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
          <span className="appbar-icon blue" style={{paddingTop:9}}><Link to="/" activeStyle={{ color: '#ff6600' }}><i className="fa fa-home" aria-hidden="true"></i></Link></span>
          <span className="appbar-text"  style={{paddingLeft:5}}><Link to="/notes/all">View All</Link></span>
        </AppBar>

        <Drawer open={this.state.open} docked={false}>
        <div className="drawer-category">{this.props.user.username ? `${this.props.user.username}'s notes` : "All"}</div>

          {this.props.user.username ?

            this.props.notes.map((x, index) => {
            if(x.author === this.props.user.username) {
              return (
                <div key={index}>
                  <MenuItem
                    style={{textAlign:"left"}}
                    onTouchTap={this.handleToggle}
                    onClick={() => this.getKey({index})}>
                    {x.title}
                  </MenuItem>
              </div>
              )
            }
          })

          :

          this.props.notes.map((x, index) => {
            return (
              <div key={index}>
                <MenuItem
                  style={{textAlign:"left"}}
                  onTouchTap={this.handleToggle}
                  onClick={() => this.getKey({index})}>
                  {x.title}
                </MenuItem>
            </div>
            )
        })
        }


        <div className="drawer-category" onTouchTap={this.handleToggle} style={{cursor:"pointer"}}>Hide</div>

        </Drawer>
      </div>
    );
  }
}
