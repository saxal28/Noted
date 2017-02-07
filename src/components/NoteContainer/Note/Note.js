import React, { Component } from "react";
import Paper from "material-ui/Paper/Paper";
import Avatar from 'material-ui/Avatar';
import { Link, browserHistory } from "react-router";
import axios from "axios";

const spinner = <img src="https://www.roadscholar.org/Themes/RoadScholar/assets/images/spinner.gif" role="presentation" className="spinner"/>;

class NoteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
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
        <div style={{textAlign:"right", padding:10, marginBottom:40}}>
          <span style={{color:"gray", marginRight:5,fontWeight:"bold", fontSize:14, width:200}}>{this.props.note ? this.props.note.author : "..."}</span>
        </div>
        {
          this.props.smallerTitle ?
          <h1 style={{fontSize:23}}>{this.props.note ? this.props.note.title : spinner}</h1> :
          <h1>{this.props.note ? this.props.note.title : spinner}</h1>
        }
        <h4>{this.props.note ? this.props.note.summary : spinner}</h4>

        <p style={{padding: 50, maxWidth:600, margin:"0 auto", textAlign:"left"}}>{this.props.hideBody ? "" : (this.props.note ? this.props.note.body : "")} </p>

        {/*this is the avatar bar */}
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
            <span onClick={this.deleteNote.bind(this)}>X</span>

        </div>

      </Paper>
    )
  }
}

// const catPictures = {
//   "Random": "https://image.flaticon.com/icons/png/512/8/8235.png",
//   "Coding" :"https://pbs.twimg.com/profile_images/633817680286384128/TMHEs83b.jpg",
//   "Fitness" :"https://image.freepik.com/free-icon/businessman-running-fast-with-suitcase-in-right-hand_318-62442.jpg",
//   "Design": "http://static.srcdn.com/wp-content/uploads/he-man-jon-chu-camp.jpg"
// }


const lorem = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

export default NoteContainer;
