import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { reducer as formReducer } from 'redux-form';
import { Link } from "react-router";

var completed = <i className="fa fa-check animated fadeInRight" aria-hidden="true"></i>;
var notCompleted = <i className="fa fa-exclamation animated infinite wobble" aria-hidden="true"></i>;

class UpdateNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = ({values: [""]});
  }

  updateValues() {
    var inputs = document.querySelectorAll('input');
    var textarea = document.querySelector("textarea").value;
    var select = document.querySelector("select").value;
    var values = [];
    inputs.forEach(input => {
      values.push(input.value);
    });
    values.push(textarea, select);
    this.setState({values})
  }

  valueExists(index) {
      if(this.state.values[index]) {
        return true
      } else {
        return false
    }
  }

  formCompleted() {
    if(this.state.values.indexOf("")) {
      return false
    } else {
      return true
    }
  }



  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {this.props.note ? console.log(this.props.note) : console.log("njh")}
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(0) ? completed : notCompleted}
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
          <Field name="summary" component="input" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(1) ? completed : notCompleted}
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <Field name="body" component="textarea" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(2) ? completed : notCompleted}
        </div>
        <div>
          <label style={{marginRight: 0, paddingRight:10}} htmlFor="body">Category</label>
          <Field name="category" component="select" onChange={this.updateValues.bind(this)}>
            <option></option>
            <option>Random</option>
            <option>Coding</option>
            <option>Design</option>
            <option>Fitness</option>
          </Field>
          {this.valueExists(3) ? completed : notCompleted}
        </div>
      <Link to="/"><button className="default-button">Back</button></Link>
      {(this.state.values.indexOf("") === -1) ? <button className="default-button" type="submit">Update Note</button> : " " }
      </form>
    );
  }
}

// Decorate the form component
UpdateNoteForm = reduxForm({
  form: "UpdateNoteForm" // a unique name for this form
})(UpdateNoteForm);

export default UpdateNoteForm;
