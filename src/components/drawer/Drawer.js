import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "material-ui/AppBar/AppBar";
import { Link } from "react-router";
import { Navbar } from "../Navbar/Navbar";

export default class DrawerSimpleExample extends Component{

  constructor(props) {
    super(props);
    this.state = {open: false, key: 0};
    };

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
          <span className="appbar-text"><Link to="/login" activeStyle={{ color: "#ff6600" }}>Login</Link></span>
          <span className="appbar-text"><Link to="/register" activeStyle={{ color: "#ff6600" }}>Register</Link></span>
          <span className="appbar-icon blue"><Link to="/" activeStyle={{ color: '#ff6600' }}><i className="fa fa-home" aria-hidden="true"></i></Link></span>
          <span className="appbar-icon"><Link to="/notes/add" activeStyle={{ color: '#ff6600' }}><i className="fa fa-plus" aria-hidden="true"></i></Link></span>
          <span className="appbar-text"><Link to="/notes/all">View All</Link></span>
        </AppBar>

        <Drawer open={this.state.open} docked={false}>
        <div className="drawer-category">All</div>
          {this.props.notes.map((x, index) => {
            return (
              <div>
                <MenuItem key={index}
                  style={{textAlign:"left"}}
                  onTouchTap={this.handleToggle}
                  onClick={() => this.getKey({index})}>
                  {x.title}
                </MenuItem>
            </div>
            )
          })
        }

        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        </Drawer>
      </div>
    );
  }
}
