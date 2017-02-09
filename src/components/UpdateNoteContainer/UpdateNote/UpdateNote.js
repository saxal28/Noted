import React, { Component } from 'react';
import Navbar from "../../Navbar/Navbar";
import Paper from "material-ui/Paper/Paper";
import Avatar from "material-ui/Avatar/Avatar";
import UpdateNoteForm from "./UpdateNoteForm";
import axios from "axios";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import getAllNotes from "../../../util/getAllNotes";


class UpdateNote extends Component {

  constructor(props) {
    super(props)
    this.state={note: null}
  }

  componentWillMount() {
    var parent = this;
    getAllNotes().then(res => {;
      res.data.notes.forEach(note => {
        if(note._id === parent.props.params.id) {
          parent.setState({note})
        }
      })

    })
  }

  handleSubmit(values) {
    const id = this.state.note._id;
    const url = `http://pacific-everglades-32525.herokuapp.com/notes/${id}`;

    axios.patch(url, values).then(result => {
      browserHistory.push("/");
    }).catch(e => console.log(e));
  }

  render() {
    let initialValues = {
      initialValues: this.state.note
    };
    return (
      <div>
        <Navbar />
        <Paper style={{maxWidth:800, margin:"3% auto", minHeight:300, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
          <h1 style={{paddingBottom:20}}>Update Note</h1>

          <UpdateNoteForm onSubmit={this.handleSubmit.bind(this)} note={this.props.note} {...initialValues}/>

          <div style={{textAlign:"right", background:"rgba(0,0,0,0.8)", padding:5}}>
            <span style={{marginRight:5, color:"white", fontWeight:"bold", fontSize:"16px"}}>You</span>
            <Avatar
              style={{margin:5}}
              size={60}
              src="https://www.getpostman.com/img/v2/logo-glyph.png?484c1b7984fa1f6fd5ca24322bfe148d" />
          </div>
        </Paper>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
      user:state.user
  }
}

export default connect(mapStateToProps, null)(UpdateNote);
