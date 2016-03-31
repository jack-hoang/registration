import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class RegistrationStatusInfo extends Component {

  constructor(props) {
    super(props);
    this.state = props.state || {}
  }

  render() {
    const { registrationStatus } = this.props.state
    return (
      <Grid>
      <Row>
        <Col md={12} id='title'>Registration Status</Col>
      </Row>
      <Row>
        <Col md={12} id='message'>{registrationStatus}</Col>
      </Row>
      </Grid>
    )
  }

}
