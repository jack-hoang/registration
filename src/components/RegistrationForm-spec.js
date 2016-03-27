import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils'

import RegistrationForm from './RegistrationForm'

describe('RegistrationForm', () => {

  it('renders inputs for user registration', () => {
    const component = renderIntoDocument(
      <RegistrationForm/>
    )
    const renderedDOM = ReactDOM.findDOMNode(component)

    const title = findRenderedDOMComponentWithClass(component, 'title')
    expect(title).toBeDefined()
    expect(title.textContent).toEqual('User Registration Form')

    const inputs = renderedDOM.querySelectorAll('input')
    expect(inputs.length).toEqual(2)
    expect(inputs[0]).toBeDefined()
    expect(inputs[0].id).toEqual('userName')
    expect(inputs[1]).toBeDefined()
    expect(inputs[1].id).toEqual('email')

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).toEqual(1)
    expect(buttons[0].textContent).toEqual('Register')
  })

})
