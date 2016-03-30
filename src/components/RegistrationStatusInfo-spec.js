import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'

import RegistrationStatusInfo from './RegistrationStatusInfo'

describe('When rendering RegistrationStatusInfo', () => {

  it('should show a success message', () => {
    const state = {
      userName: 'John Doe',
    }
    const component = renderIntoDocument(
      <RegistrationStatusInfo state={state}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const title = renderedDOM.querySelector('#title')
    expect(title).not.toBeNull()
    expect(title.textContent).toEqual('Registration Status')

    const message = renderedDOM.querySelector('#message')
    expect(message).not.toBeNull()
    expect(message.textContent).toEqual('Thank you John Doe! You have successfully registered.')

  })

})
