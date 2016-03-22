import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class RegistrationForm extends Component {
  render() {
    const {fields: {userName}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" {...userName}/>
        </div>
      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'registration',
  fields: ['userName']
})(RegistrationForm);

export default RegistrationForm;
