import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class RegistrationForm extends Component {
  render() {
    const {fields: {userName, email, phone}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" {...userName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...email}/>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" {...phone}/>
        </div>
      </form>
    );
  }
}

RegistrationForm = reduxForm({
  form: 'registration',
  fields: ['userName', 'email', 'phone']
})(RegistrationForm);

export default RegistrationForm;
