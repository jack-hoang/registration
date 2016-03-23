import React, {Component, PropTypes} from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class FormField extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    field: PropTypes.object,
    label: PropTypes.string.isRequired,
    inputProps: PropTypes.object
  }

  static defaultProps = {
    field: {},
    inputProps: {}
  }

  render() {
   const {id, field, label, inputProps} = this.props
   return (
     <Grid>
     <Row>
       <Col md={4}>
         <label htmlFor={id}>{label}</label>
       </Col>
      <Col md={8}>
         {this.props.children}
      </Col>
    </Row>
    </Grid>
   )
  }

}

export default FormField
