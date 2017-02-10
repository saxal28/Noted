import React, { Component } from "react";
import Paper from "material-ui/Paper/Paper";
import Avatar from 'material-ui/Avatar';
import { Link, browserHistory } from "react-router";
import Text from "react-format-text";
import axios from "axios";

const spinner = <img src="https://www.roadscholar.org/Themes/RoadScholar/assets/images/spinner.gif" role="presentation" className="spinner"/>;

class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideBody: false
    }
  }

  deleteNote() {
    var id = this.props.note._id;
    axios.delete(`https://pacific-everglades-32525.herokuapp.com/notes/${id}`).then(x => {
      console.log('deleted', x)
      browserHistory.push("/");
    })
  }

  render(){
    const spanStyle = {marginRight:5, color:"white", fontWeight:"bold", fontSize:"16px"};
    return (
      <Paper style={{maxWidth:800, margin:"3% auto", minHeight:280, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>

          {this.props.note ?
          (this.props.user.username === this.props.note.author ?
            <div style={{textAlign:"right", padding: 10, marginBottom:20}}>
              <span>
                <span style={{color:"gray", marginRight:5,fontWeight:"bold", fontSize:14, float:"left"}}>{this.props.note ? this.props.note.author : "..."}</span>
                <Link  style={{color:"gray", marginRight:5,fontWeight:"bold", fontSize:14}} to={`/notes/${this.props.note ? this.props.note._id : 1231354}/update`}><span>Update</span></Link>
                <span style={{color:"gray", marginRight:5,fontWeight:"bold", fontSize:14,  cursor:"pointer"}} onClick={this.deleteNote.bind(this)}>X</span>
              </span>
          </div>
            :
            <div style={{textAlign:"right", padding: 10, marginBottom:40}}>
              <span style={{color:"gray", marginRight:5,fontWeight:"bold", fontSize:14, float:"left"}}>{this.props.note ? this.props.note.author : "..."}</span>
            </div>
          ) : "" }
        {
          this.props.smallerTitle ?
          <h1 style={{fontSize:23}}>{this.props.note ? this.props.note.title : spinner}</h1> :
          <h1>{this.props.note ? this.props.note.title : spinner}</h1>
        }
        <h4>{this.props.note ? <Text>{this.props.note.summary}</Text> : spinner}</h4>

        <p style={{padding: 50, maxWidth:600, margin:"0 auto", textAlign:"left"}}>{this.props.hideBody ? "" : (this.props.note ? <Text>{this.props.note.body}</Text> : "")} </p>

        {/*this is the avatar bar */}
        <div style={{textAlign:"right"}}>

        </div>
        <div style={{textAlign:"right", background:"rgba(0,0,0,0.8)", padding:5}}>
          <span style={spanStyle}>{this.props.note ? this.props.note.category : "..."}</span>

            {this.props.addLink ?
              <Link to={`/notes/${this.props.note._id}`}><Avatar
                style={{margin:5}}
                size={60}
                src="https://www.getpostman.com/img/v2/logo-glyph.png?484c1b7984fa1f6fd5ca24322bfe148d" />
              </Link>
                :
                <Avatar
                  style={{margin:5}}
                  size={60}
                  src="https://www.getpostman.com/img/v2/logo-glyph.png?484c1b7984fa1f6fd5ca24322bfe148d" />
            }

        </div>

      </Paper>
    )
  }
}

export default NoteContainer;
