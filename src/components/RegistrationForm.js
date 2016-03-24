import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import FormField from './FormField'
import TextInput from './TextInput'

class RegistrationForm extends Component {
  render() {
    const {fields: {userName, email}, handleSubmit} = this.props;
    return (
      <div>
        <h1>User Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div><TextInput label='Name' id='userName' /></div>
          <div><TextInput label='Email' id='email' /></div>
          <div><button>Register</button></div>
        </form>
      </div>
    );
  }

}

RegistrationForm = reduxForm({
  form: 'registration',
  fields: ['userName', 'email']
})(RegistrationForm);

export default RegistrationForm;
