import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class VerifyRegistrationInfo extends Component {
  static propTypes = {
    register: PropTypes.func,
    push: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = props.state || {}
  }

  edit(evt) {
    this.props.push('/')
  }

  reg(evt) {
    this.props.register(this.props.state)
    this.props.push('/register')
  }

  render() {
    const { state } = this.props
    return (
      <Grid>
      <Row>
        <Col md={12}><h1 id='title'>Verify Registration Information</h1></Col>
      </Row>
      <Row>
        <Col md={3}>Name</Col>
        <Col md={3} id='userName'>{state.userName}</Col>
      </Row>
      <Row>
        <Col md={3}>Email</Col>
        <Col md={3} id='email'>{state.email}</Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
          <button id='edit' onClick={::this.edit}>Edit</button>
          <button id='register' onClick={::this.reg}>Register</button>
        </Col>
      </Row>
      </Grid>
    )
  }

}
