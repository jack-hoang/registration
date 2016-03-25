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

  render() {
    const {id, field, label, inputProps} = this.props
    return <FormField id={id} field={field} inputProps={inputProps} label={label}>
      <input id={id} {...inputProps} />
    </FormField>
  }
}

export default TextInput
