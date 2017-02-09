import React, { Component } from 'react';
import Drawer from "../drawer/Drawer.js";
import Note from "../Note/Note";
import UpdateNote from "./UpdateNote/UpdateNote";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import getAllNotes from "../../util/getAllNotes.js";

// var notes = getAllNotes();

export default class UpdateNoteContainer extends Component {
  render() {
    return (
      <div>
        <UpdateNote selectNote={this.props.selectNote.bind(this)} user={this.props.user}/>
      </div>
    );
  }
}
