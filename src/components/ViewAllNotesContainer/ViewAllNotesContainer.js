import React, { Component } from "react";
import getAllNotes from "../../util/getAllNotes";
import Paper from "material-ui/Paper/Paper";
import Navbar from "../Navbar/Navbar";
import Note from "../NoteContainer/Note/Note";

export default class ViewAllNotes extends Component {
  constructor(props) {
    super(props)
    this.state = ({notes: []});
  }

  componentWillMount() {
    getAllNotes().then(notes => {
      this.setState({notes : notes.data.notes})
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Paper className="paper-margin" style={{maxWidth:800, boxShadow:"none", margin:"0% auto", minHeight:300, paddingTop:20, background:"transparent", height:"auto"}}>
          {this.state.notes ? this.state.notes.map((note, index) => {
            return (
              <div className="col-sm-6">
                <Note hideBody={true} note={note} key={index} smallerTitle={true} addLink={true}/>
              </div>
            )
          }) : "..."}
        </Paper>
      </div>
    )
  }
}
