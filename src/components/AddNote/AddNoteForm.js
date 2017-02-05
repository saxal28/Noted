import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
import { Link } from "react-router";

class AddNoteForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
          <i className="fa fa-check animated bounce" aria-hidden="true"></i>
        </div>
        <div>
          <label htmlFor="summary">Summary</label>
          <Field name="summary" component="input" type="text"/>
          <i className="fa fa-exclamation animated infinite tada" aria-hidden="true"></i>
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <Field name="body" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text"/>
        </div>
      <Link to="/"><button className="default-button">Back</button></Link>
      <button className="default-button" type="submit">Add Note</button>
      </form>
    );
  }
}

// Decorate the form component
AddNoteForm = reduxForm({
  form: "addNoteForm" // a unique name for this form
})(AddNoteForm);

export default AddNoteForm;
