import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'

import configureStore from '../store/configureStore'
import RegistrationForm from './RegistrationForm'

import * as actions from '../actions/actions'
import * as types from '../actions/ActionTypes'

describe('RegistrationForm', () => {

  it('renders inputs for user registration', () => {
    const store = configureStore()
    const component = renderIntoDocument(
      <RegistrationForm store={store} />
    )
    const renderedDOM = ReactDOM.findDOMNode(component)

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

  it('dispatches '+types.FORM_UPDATE+' when form is submitted', () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    const store = configureStore()
    spyOn(store, 'dispatch')

    const component = renderIntoDocument(
      <RegistrationForm store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)
    const inputs = renderedDOM.querySelectorAll('input')
    Array.from(inputs).forEach((i) => {
      i.value = formData[i.id]
    })

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
    Simulate.click(buttons[0])

    expect(store.dispatch).toHaveBeenCalledWith(actions.formUpdate(formData))
  })

})
