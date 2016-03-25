import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'

import FormField from './FormField'
import TextInput from './TextInput'

class RegistrationForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired
  }

  render() {
    const {fields: {userName, email}, handleSubmit, error, submitting} = this.props;
    return (
      <div>
        <h1>User Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div><TextInput label='Name' id='userName' /></div>
          <div><TextInput label='Email' id='email' /></div>
          <div><button type="submit" disabled={submitting}>
                  Register
              </button>
          </div>
        </form>
      </div>
    );
  }

}

RegistrationForm = reduxForm({
  form: 'registration',
  fields: ['userName', 'email']
})(RegistrationForm);

export default RegistrationForm
