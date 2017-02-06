import React, { Component } from 'react';
import Drawer from "../drawer/Drawer.js";
import Note from "./Note/Note";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import selectNote from "../../actions/selectNote";
import { getNotes } from "../../actions/getNotes";
import getAllNotes from "../../util/getAllNotes";

class NotedContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes:  [],
      activeNote: 0
    }
  }

  chooseNote(num) {
    var activeNote = this.props.selectNote(num).note;
    this.setState({ activeNote })
  }

  getNotes() {

    getAllNotes()
    .then(res => {
      var notes = res.data.notes;
      this.setState({notes});
    })
  }

  componentWillMount() {
    this.getNotes();
    console.log(this.state.activeNote)
  }

  // componentDidUpdate() {
  //   if()
  //   this.getNotes();
  // }

  render() {
    return (
      <div>
        <Drawer notes={this.state.notes} selectNote={this.chooseNote.bind(this)}/>
        <Note note={this.state.notes[this.state.activeNote]}/>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
      test: state,
      state: state,
      note: state,
      // notes: state
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      selectNote,
      getNotes
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotedContainer);

 //

 // function getAllNotes() {
 //   var result = axios.get("http://pacific-everglades-32525.herokuapp.com/notes");
 //   return result;
 // }
