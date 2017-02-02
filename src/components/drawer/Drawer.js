import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimpleExample extends Component{

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open} docked={false}>
        <MenuItem style={{background:"orange"}} onTouchTap={this.handleToggle}>General</MenuItem>
        {this.props.notes.map((x, index) => <MenuItem key={index} onTouchTap={this.handleToggle}><span className="pull-left">{index+1}</span>{x.title}</MenuItem>)}
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        </Drawer>
      </div>
    );
  }
}
