import React from 'react'
import ReactDOM from 'react-dom'
import { push } from 'react-router-redux'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import configureStore from 'redux-mock-store'

import RegistrationStatus from './RegistrationStatus'

const mockStore = configureStore()

describe('When rendering RegistrationStatus', () => {

  it('should display status message from state', () => {
    const state = {
      userName: 'John Doe',
      statusMessage: 'Thank you John Doe! You have successfully registered.'
    }

    const store = mockStore(state)

    const component = renderIntoDocument(
      <RegistrationStatus store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const title = renderedDOM.querySelector('#title')
    expect(title).not.toBeNull()
    expect(title.textContent).toEqual('Registration Status')

    const message = renderedDOM.querySelector('#message')
    expect(message).not.toBeNull()
    expect(message.textContent).toEqual(state.statusMessage)

  })

})
