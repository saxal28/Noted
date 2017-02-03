import React, { Component } from 'react';
import Drawer from "./drawer/Drawer.js";
import AppBar from "material-ui/AppBar/AppBar";
import NoteContainer from "./NoteContainer/NoteContainer";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectNote from "../actions/selectNote";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes:  [],
      activeNote: 1
    }
  }

  chooseNote(num) {
    var activeNote = this.props.selectNote(num).note;
    console.log("new active note", activeNote);
    console.log(this)
    this.setState({ activeNote })
  }

  getNotes() {
    const app = this;
    var notes;
    axios.get("http://pacific-everglades-32525.herokuapp.com/notes")
    .then(res => {
      notes = res.data.notes;
      console.log(notes);
      app.setState({notes});
    })
  }

  componentWillMount() {
    this.getNotes();
  }

  componentDidUpdate() {
    this.getNotes();
  }

  render() {
    return (
      <div>
        <Drawer notes={this.state.notes} selectNote={this.chooseNote.bind(this)}/>
        <NoteContainer note={this.state.notes[this.state.activeNote]}/>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
      test: state,
      state:state,
      note:state
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      selectNote
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 //
