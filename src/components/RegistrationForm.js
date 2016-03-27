import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import FormField from './FormField'
import TextInput from './TextInput'

export class RegistrationForm extends Component {
  static propTypes = {
    formUpdate: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <h1>User Registration Form</h1>
        <form>
          <div><TextInput label='Name' id='userName' /></div>
          <div><TextInput label='Email' id='email' /></div>
          <div><button onClick={this.props.formUpdate}>Register</button>
          </div>
        </form>
      </div>
    );
  }

}
