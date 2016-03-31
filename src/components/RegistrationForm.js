import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

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
      <div id="registrationForm">
        <h1 id="title">User Registration Form</h1>
        <div>
        <form onChange={::this.handleInputChange} onSubmit={::this.handleSubmit}>
          <TextInput label='Name' id='userName' value={this.state.userName} />
          <TextInput label='Email' id='email' value={this.state.email}/>
          <Grid><Row><Col md={4}></Col><Col md={8}><button>Next</button></Col></Row></Grid>
        </form>
        </div>
      </div>
    );
  }

}
