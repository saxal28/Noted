import React, { Component } from "react";
import Note from "../NoteContainer/Note/Note";
import Navbar from "../Navbar/Navbar";
import axios from "axios";


export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {note: null}
  }

  componentWillMount() {
    var id = this.props.params.id;
    var note;
    axios.get(`https://pacific-everglades-32525.herokuapp.com/notes/${id}`).then(note => {
      note = note.data;
      this.setState({note})
    }).catch(e => console.log(e))
  }

  render() {
    return (
      <div>
        <Navbar />
        {console.log(this.state.note ? this.state.note : "...")}
        <Note note={this.state.note}/>
      </div>
    )
  }
}
