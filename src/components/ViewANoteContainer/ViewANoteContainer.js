import React, { Component } from "react";
import Note from "../NoteContainer/Note/Note";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { connect } from "react-redux";


class ViewANoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {note: null}
  }

  componentWillMount() {
    var id = this.props.params.id;
    axios.get(`https://pacific-everglades-32525.herokuapp.com/notes/${id}`).then(note => {
      note = note.data;
      this.setState({note})
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Note note={this.state.note} user={this.props.user}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(ViewANoteContainer)
