import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class VerifyRegistrationInfo extends Component {
  static propTypes = {
    push: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = props.state || {}
  }

  edit(evt) {
    this.props.push('/')
  }

    register(evt) {
      this.props.push('/register')
    }

  render() {
    const { state } = this.props
    return (
      <Grid>
      <Row>
        <Col md={12} id='title'>Verify Registration Information</Col>
      </Row>
      <Row>
        <Col md={6}>Name</Col>
        <Col md={6} id='userName'>{state.userName}</Col>
      </Row>
      <Row>
        <Col md={6}>Email</Col>
        <Col md={6} id='email'>{state.email}</Col>
      </Row>
      <Row>
        <Col md={12}>
          <button id='edit' onClick={::this.edit}>Edit</button>
          <button id='register' onClick={::this.register}>Register</button>
        </Col>
      </Row>
      </Grid>
    )
  }

}
