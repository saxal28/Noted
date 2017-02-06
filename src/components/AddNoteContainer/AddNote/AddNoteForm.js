import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { reducer as formReducer } from 'redux-form';
import { Link } from "react-router";

var completed = <i className="fa fa-check animated fadeInUp" aria-hidden="true"></i>;
var notCompleted = <i className="fa fa-exclamation animated infinite wobble" aria-hidden="true"></i>;

class AddNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = ({values: []});
  }

  updateValues() {
    var inputs = document.querySelectorAll('input');
    var values = [];
    inputs.forEach(input => {
      if(input.value) {
        values.push(input.value);
      }
    });
    this.setState({values})
  }

  valueExists(index) {
    if(this.state.values[index]) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
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
          <Field name="body" component="input" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(2) ? completed : notCompleted}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(3) ? completed : notCompleted}
        </div>
        <div>
          <label style={{marginRight: 0, paddingRight:10}} htmlFor="body">Category</label>
          <Field name="category" component="select" style={{width:213}} onChange={this.updateValues.bind(this)} >
            <option>Random</option>
            <option>Coding</option>
            <option>Design</option>
            <option>Fitness</option>
          </Field>
        </div>
      <Link to="/"><button className="default-button">Back</button></Link>
      {this.state.values.length === 4 ? <button className="default-button" type="submit">Add Note</button> : " " }
      </form>
    );
  }
}

// Decorate the form component
AddNoteForm = reduxForm({
  form: "addNoteForm" // a unique name for this form
})(AddNoteForm);

export default AddNoteForm;
