import React, { Component } from 'react';
import Drawer from "../drawer/Drawer.js";
import Note from "../Note/Note";
import AddNote from "./AddNote/AddNote";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

export default class AddNoteContainer extends Component {

  render() {
    return (
      <div>
        <AddNote />
      </div>
    );
  }
}



// function mapStateToProps(state) {
//   return {
//       test: state,
//       state:state,
//       note:state
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//       selectNote
//     }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(NotedContainer);

 //