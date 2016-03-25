import React, {Component, PropTypes} from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

class App extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App
