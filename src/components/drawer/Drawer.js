import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
        {this.props.notes.map((x, index) => <MenuItem key={index}><span className="pull-left">{index+1}</span>{x.title}</MenuItem>)}
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        </Drawer>
      </div>
    );
  }
}
