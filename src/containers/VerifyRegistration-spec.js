import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'
import configureStore from 'redux-mock-store'

import VerifyRegistration from './VerifyRegistration'

const mockStore = configureStore()

describe('When rendering VerifyRegistration', () => {

  it('should display registration info from state', () => {
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

describe('When Edit button is clicked in VerifyRegistration', () => {

  it('should allow user to edit registration information', () => {
    const state = {
      registration: {
        userName: 'John Doe',
        email: 'john.doe@example.com'
      }
    }

    const store = mockStore(state)
    spyOn(store, 'dispatch')

    const component = renderIntoDocument(
      <VerifyRegistration store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    expect(buttons[0].textContent).toEqual('Edit')
    Simulate.click(buttons[0])

    expect(store.dispatch).toHaveBeenCalledWith(push('/'))
  })

})
