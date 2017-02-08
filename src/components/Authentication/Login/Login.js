import React, { Component } from 'react';
import Navbar from "../../Navbar/Navbar";
import Paper from "material-ui/Paper/Paper";
import Avatar from "material-ui/Avatar/Avatar";
import LoginForm from "./LoginForm";
import axios from "axios";
import { browserHistory } from "react-router";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state={error:false}
  }

  handleSubmit(values) {
    const that = this;
    const url = "http://pacific-everglades-32525.herokuapp.com/login";
    axios.post(url, values).then(result => {
      if(!result) {
        return console.log("hi")
      }
      browserHistory.push("/");
      console.log("login", result)
      console.log(result.data)
    }).catch(e => {
      console.log("error");
      that.setState({error: true})
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Paper style={{maxWidth:800, margin:"3% auto", minHeight:300, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
          <h1 style={{paddingBottom:20}}>Login</h1>
          {this.state.error}

          <LoginForm onSubmit={this.handleSubmit.bind(this)} error={this.state.error}/>

            {this.state.error ?
              <div className="alert">
                Username/Password is incorrect.
              </div>
              : ""
            }

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
