import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "material-ui/AppBar/AppBar";
import { Link } from "react-router";

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

        <AppBar onLeftIconButtonTouchTap={this.handleToggle} style={{background:"transparent", boxShadow:"none"}}>
          <span className="appbar-icon"><Link to="/add" activeStyle={{ color: '#ff6600' }}><i className="fa fa-plus" aria-hidden="true"></i></Link></span>
          <span className="appbar-icon blue"><Link to="/" activeStyle={{ color: '#ff6600' }}><i className="fa fa-home" aria-hidden="true"></i></Link></span>
          <span className="appbar-text"><Link to="/all">View All</Link></span>
        </AppBar>

        <Drawer open={this.state.open} docked={false}>
        <MenuItem style={{background:"#ff6600"}}>General</MenuItem>
        {this.props.notes.map((x, index) =>
          <MenuItem key={index}
            style={{textAlign:"left"}}
            onTouchTap={this.handleToggle}
            onClick={() => this.getKey({index})}>
            {x.title}
          </MenuItem>)}
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        </Drawer>
      </div>
    );
  }
}
