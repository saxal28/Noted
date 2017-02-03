import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from "material-ui/AppBar/AppBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectNote from "../../actions/selectNote";

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
    const that = this;
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={this.handleToggle} style={{background:"transparent", boxShadow:"none"}}>
        <span className="appbar-icon"><i className="fa fa-plus" aria-hidden="true"></i></span>
        <span className="appbar-icon blue"><i className="fa fa-home" aria-hidden="true"></i></span>
        <span className="appbar-text">View All</span>
        </AppBar>
        <Drawer open={this.state.open} docked={false}>
        <MenuItem style={{background:"orange"}}>General</MenuItem>
        {this.props.notes.map((x, index) =>
          <MenuItem key={index}
            onTouchTap={this.handleToggle}
            onClick={() => this.getKey({index})}
          >
            <span className="pull-left" key={index} className="pizza">key: {index+1}</span>{x.title}
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
