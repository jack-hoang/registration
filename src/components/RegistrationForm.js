import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import FormField from './FormField'
import TextInput from './TextInput'

class RegistrationForm extends Component {
  render() {
    const {fields: {userName, email, phone}, handleSubmit} = this.props;
    return (
      <div>
        <h1>User Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div><TextInput label='Name' id='userName' /></div>
          <div><TextInput label='Email' id='email' /></div>
          <div><TextInput label='Phone Number' id='phone' /></div>
        </form>
      </div>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'registration',
  fields: ['userName', 'email', 'phone']
})(RegistrationForm);

export default RegistrationForm;
