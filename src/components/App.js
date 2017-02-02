import React, { Component } from 'react';
import Drawer from "./drawer/Drawer.js";
import AppBar from "material-ui/AppBar/AppBar";
import NoteContainer from "./NoteContainer/NoteContainer";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes:  []
    }
  }
  componentWillMount() {
    const app = this;
    var notes;
    axios.get("http://pacific-everglades-32525.herokuapp.com/notes")
    .then(res => {
      notes = res.data.notes;
      console.log(notes);
      app.setState({notes});
    })
  }

  render() {
    return (
      <div>
        <AppBar/>
        <Drawer notes={this.state.notes}/>
        <NoteContainer note={this.state.notes[0]}/>
      </div>

    );
  }
}

export default App;
