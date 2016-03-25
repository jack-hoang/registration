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

  it('invokes callback when form is submitted', () => {
    const store = configureStore()
    const register = jasmine.createSpy("register")
    const component = renderIntoDocument(
      <RegistrationForm store={store} onSubmit={register}/>
    )
    const form = findRenderedDOMComponentWithTag(component, 'form')
    Simulate.submit(form)
    expect(register).toHaveBeenCalled()
  })

})
