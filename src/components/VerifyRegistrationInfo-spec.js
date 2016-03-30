import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'

import VerifyRegistrationInfo from './VerifyRegistrationInfo'

describe('When rendering VerifyRegistrationInfo ', () => {

  it('should show user registration info for verification', () => {
    const state = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }
    const component = renderIntoDocument(
      <VerifyRegistrationInfo state={state} />
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const title = renderedDOM.querySelector('#title')
    expect(title).toBeDefined()
    expect(title.textContent).toEqual('Verify Registration Information')

    const userName = renderedDOM.querySelector('#userName')
    expect(userName).toBeDefined()
    expect(userName.textContent).toEqual(state.userName)

    const email = renderedDOM.querySelector('#email')
    expect(email).toBeDefined()
    expect(email.textContent).toEqual(state.email)

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons.length).toEqual(2)
    expect(buttons[0].textContent).toEqual('Edit')
    expect(buttons[1].textContent).toEqual('Confirm')

  })

})
