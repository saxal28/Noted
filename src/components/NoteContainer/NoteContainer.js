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
    <Paper style={{maxWidth:800, margin:"20px auto", minHeight:300, paddingTop:40}} zDepth={2}>
      <h1>{this.props.note ? this.props.note.title : "..."}</h1>
      <h4>{this.props.note ? this.props.note.summary : "..."}</h4>
      <p style={{padding: 50, maxWidth:600, margin:"0 auto", textAlign:"left"}}>{lorem}</p>

      <div style={{textAlign:"right", background:"lightblue", padding:5}}>
        <span style={{marginLeft:10}}>{this.props.note ? this.props.note.author : "..."}</span>
        <Avatar
          style={{margin:5}}
          size={60}
          src="https://pbs.twimg.com/profile_images/633817680286384128/TMHEs83b.jpg" />
      </div>
    </Paper>
  )
}
}


const lorem = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

export default NoteContainer;

function renderTitle(nextProps) {
  return <h1>{nextProps.title}</h1>
}
