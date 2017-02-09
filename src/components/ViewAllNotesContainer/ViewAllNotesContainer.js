import React, { Component } from "react";
import getAllNotes from "../../util/getAllNotes";
import Paper from "material-ui/Paper/Paper";
import Navbar from "../Navbar/Navbar";
import Note from "../NoteContainer/Note/Note";
import Searchbar from "./Searchbar";
import { connect } from "react-redux";

const paperStyle = {maxWidth:800, boxShadow:"none", margin:"0% auto", minHeight:300, paddingTop:20, background:"transparent", height:"auto"};

class ViewAllNotes extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      notes: [],
      category: null,
      searchType: "title",
    });
  }

  getCategoryFromSearchbar(e) {
    var category = e.target.value;
    this.setState({category});
  }

  selectSearchType(e) {
    var searchType = e.target.value;
    this.setState({searchType :searchType.toLowerCase()});
  }

  componentWillMount() {
    getAllNotes().then(notes => {
      this.setState({notes : notes.data.notes})
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Searchbar
          onChange={this.getCategoryFromSearchbar.bind(this)}
          categories={this.state.notes[0]}
          selectSearchType={this.selectSearchType.bind(this)}
          />
        <Paper className="paper-margin" style={paperStyle}>
          {this.state.notes ? this.state.notes.map((note, index) => {

            if (this.state.category === null) {
              return (
                <div className="col-sm-6" key={index} >
                  <Note hideBody={true} note={note} key={index} smallerTitle={true} addLink={true} user={this.props.user}/>
                </div>
              )
            } else {
              {/*able to filter by both lowercase and uppercase*/}
              if(note[this.state.searchType].toLowerCase().includes(this.state.category) || note[this.state.searchType].includes(this.state.category)) {
                return (
                  <div className="col-sm-6">
                    <Note hideBody={true} note={note} key={index} smallerTitle={true} addLink={true} user={this.props.user}/>
                  </div>
                )
              }
            }

          }) : "..."}
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      test: state,
      state: state,
      note: state,
      user: state.user
      // notes: state
  }
}

export default connect(mapStateToProps, null)(ViewAllNotes);
