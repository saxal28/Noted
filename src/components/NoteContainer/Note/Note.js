import React, { Component } from "react";
import Paper from "material-ui/Paper/Paper";
import Avatar from 'material-ui/Avatar';
import { Link } from "react-router";

const spinner = <img src="https://www.roadscholar.org/Themes/RoadScholar/assets/images/spinner.gif" role="presentation" className="spinner"/>;

class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      hideBody: false
    }
  }

  render(){
    const spanStyle = {marginRight:5, color:"white", fontWeight:"bold", fontSize:"16px"};
    return (
      <Paper style={{maxWidth:800, margin:"3% auto", minHeight:280, paddingTop:40, background:"rgba(255,255,255,0.8)"}} className="mobile" zDepth={2}>
        {
          this.props.smallerTitle ?
          <h1 style={{fontSize:23}}>{this.props.note ? this.props.note.title : spinner}</h1> :
          <h1>{this.props.note ? this.props.note.title : spinner}</h1>
        }
        <h4>{this.props.note ? this.props.note.summary : spinner}</h4>

        <p style={{padding: 50, maxWidth:600, margin:"0 auto", textAlign:"left"}}>{this.props.hideBody ? "" : lorem} </p>

        {/*this is the avatar bar */}
        <div style={{textAlign:"right", background:"rgba(0,0,0,0.8)", padding:5}}>
          <span style={spanStyle}>{this.props.note ? this.props.note.category : "..."}</span>
          <span style={spanStyle}>{this.props.note ? this.props.note.author : "..."}</span>

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


const lorem = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

export default NoteContainer;
