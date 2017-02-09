import React, { Component } from 'react';
import Drawer from "../drawer/Drawer.js";
import Note from "../Note/Note";
import AddNote from "./AddNote/AddNote";
import getAllNotes from "../../util/getAllNotes.js";

export default class AddNoteContainer extends Component {
  render() {
    return (
      <div>
        {this.props.user ? console.log(this.props.user) : console.log("not found")}
        <AddNote selectNote={this.props.selectNote.bind(this)} user={this.props.user}/>
      </div>
    );
  }
}
