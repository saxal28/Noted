import React, { Component } from 'react';
import Navbar from "../../Navbar/Navbar";
import Paper from "material-ui/Paper/Paper";
import Avatar from "material-ui/Avatar/Avatar";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import setUser from "../../../actions/setUser";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Register extends Component {

  constructor(props) {
    super(props);
    this.state={error: false}
  }

  handleSubmit(values) {
    const that = this;
    console.log(values)
    const url = "http://pacific-everglades-32525.herokuapp.com/register";
    axios.post(url, values).then(result => {
      if(!result) {
        return console.log("name taken")
      }
      this.props.setUser(result.data.user.username);
      browserHistory.push("/");
    }).catch(e => that.setState({error: true}));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Paper style={{maxWidth:800, margin:"3% auto", minHeight:300, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
          <h1 style={{paddingBottom:20}}>Register</h1>

          <RegisterForm onSubmit={this.handleSubmit.bind(this)} />

            {this.state.error ?
              <div className="alert">
                Username is already taken.
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

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
