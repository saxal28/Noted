import React, { Component } from 'react';
import Navbar from "../../Navbar/Navbar";
import Paper from "material-ui/Paper/Paper";
import Avatar from "material-ui/Avatar/Avatar";
import AddNoteForm from "./AddNoteForm";
import getAllNotes from "../../../util/getAllNotes";
import axios from "axios";
import { browserHistory } from "react-router";
import { connect } from "react-redux";

class AddNote extends Component {
  constructor(props) {
    super(props)
    this.state={notes: null}
  }

  componentWillMount() {
    getAllNotes().then( notes => {
      this.setState({notes})
    })
  }

  handleSubmit(values) {
    const url = "http://pacific-everglades-32525.herokuapp.com/notes";
    const author = this.props.user ? this.props.user.username : "Anon";
    values.author = author;
    axios.post(url, values).then(result => {
      browserHistory.push("/");
    }).catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Paper style={{maxWidth:800, margin:"3% auto", minHeight:300, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
          <h1 style={{paddingBottom:20}}>Add a Note</h1>

          <AddNoteForm onSubmit={this.handleSubmit.bind(this)} notes={this.state.notes}/>

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
      test: state,
      state:state,
      note:state,
      user:state.user
  }
}

export default connect(mapStateToProps, null)(AddNote);
