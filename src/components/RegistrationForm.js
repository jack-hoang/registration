import React, {Component, PropTypes} from 'react'

import TextInput from './TextInput'

export default class RegistrationForm extends Component {
  static propTypes = {
    formUpdate: PropTypes.func,
    push: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
        userName: props.userName,
        email: props.email
      };
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.formUpdate(this.state)
    this.props.push('/verify')
  }

  render() {
    return (
      <div>
        <h1 id="title">User Registration Form</h1>
        <form onChange={::this.handleInputChange} onSubmit={::this.handleSubmit}>
          <div><TextInput label='Name' id='userName' value={this.state.userName} /></div>
          <div><TextInput label='Email' id='email' value={this.state.email}/></div>
          <div><button>Next</button>
          </div>
        </form>
      </div>
    );
  }

}
