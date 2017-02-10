import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { reducer as formReducer } from 'redux-form';
import { Link } from "react-router";

var completed = <i className="fa fa-check animated fadeInRight" aria-hidden="true"></i>;
var notCompleted = <i className="fa fa-exclamation animated infinite wobble" aria-hidden="true"></i>;

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = ({values: [""]});
  }

  updateValues() {
    var inputs = document.querySelectorAll('input');
    var values = [];
    inputs.forEach(input => {
      values.push(input.value);
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
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" onChange={this.updateValues.bind(this)} />
          {this.valueExists(0) ? completed : notCompleted}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" onChange={this.updateValues.bind(this)} />
          {this.valueExists(1) ? completed : notCompleted}
        </div>

      {(this.state.values.indexOf("") === -1) ? <button className="default-button" type="submit">Register</button> :   <Link to="/"><button className="default-button">Back</button></Link> }
      </form>
    );
  }
}

// Decorate the form component
RegisterForm = reduxForm({
  form: "RegisterForm" // a unique name for this form
})(RegisterForm);

export default RegisterForm;
