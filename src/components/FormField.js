import React, {Component, PropTypes} from 'react'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class FormField extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    field: PropTypes.object,
    label: PropTypes.string.isRequired,
    inputProps: PropTypes.object
  }

  render() {
   const {id, field, label, inputProps} = this.props
   return (
     <div>
     <Row>
       <Col sm={4}>
         <label htmlFor={id}>{label}</label>
       </Col>
    </Row>
    <Row>
      <Col sm={8}>
         {this.props.children}
      </Col>
    </Row>
    </div>
   )
  }

}


FormField.defaultProps = {
  field: {},
  inputProps: {}
}

export default FormField
