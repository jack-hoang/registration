import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'
import configureStore from 'redux-mock-store'

import VerifyRegistration from './VerifyRegistration'

const mockStore = configureStore()

describe('VerifyRegistration', () => {

  it('displays info from state', () => {
    const state = {
      registration: {
        userName: 'John Doe',
        email: 'john.doe@example.com'
      }
    }

    const store = mockStore(state)

    const component = renderIntoDocument(
      <VerifyRegistration store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const userName = renderedDOM.querySelector('#userName')
    expect(userName).not.toBeNull()
    expect(userName.textContent).toEqual(state.registration.userName)

    const email = renderedDOM.querySelector('#email')
    expect(email).not.toBeNull()
    expect(email.textContent).toEqual(state.registration.email)

  })

})
