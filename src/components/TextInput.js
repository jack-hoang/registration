import React, {Component, PropTypes} from 'react'
import FormField from './FormField'

class TextInput extends Component {
  static propTypes = {
    field: PropTypes.object.isRequired
  }

  static defaultProps = {
    field: {},
    inputProps: {}
  }

  handleChange(evt) {
    this.setState({value: evt.target.value})
  }

  render() {
    const {id, field, label, value, inputProps} = this.props
    return <FormField id={id} field={field} inputProps={inputProps} label={label}>
      <input id={id} {...inputProps} value={value} onChange={::this.handleChange} />
    </FormField>
  }
}

export default TextInput
