import React, { Component } from "react";
import Paper from "material-ui/Paper/Paper";
import Avatar from 'material-ui/Avatar';

class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {note: ""}
  }
  // componentWillReceiveProps(nextProps) {
  //   const note = this.props.notes[0].title;
  //   this.setState({note})
  // }
  render(){
  return (
    <Paper style={{maxWidth:800, margin:"3% auto", minHeight:300, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
      <h1>{this.props.note ? this.props.note.title : "..."}</h1>
      <h4>{this.props.note ? this.props.note.summary : "..."}</h4>
      <p style={{padding: 50, maxWidth:600, margin:"0 auto", textAlign:"left"}}>{lorem}</p>

      <div style={{textAlign:"right", background:"rgba(0,0,0,0.8)", padding:5}}>
        <span style={{marginRight:5, color:"white", fontWeight:"bold", fontSize:"16px"}}>{this.props.note ? this.props.note.author : "..."}</span>
        <Avatar
          style={{margin:5}}
          size={60}
          src="https://www.getpostman.com/img/v2/logo-glyph.png?484c1b7984fa1f6fd5ca24322bfe148d" />
      </div>
    </Paper>
  )
}
}


const lorem = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

export default NoteContainer;
