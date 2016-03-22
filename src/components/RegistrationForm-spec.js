import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import configureStore from '../redux/configureStore'
import RegistrationForm from './RegistrationForm'

describe('RegistrationForm', () => {

  it('renders inputs for user registration', () => {
    const store = configureStore()
    const component = renderIntoDocument(
      <RegistrationForm store={store} />
    );
    const renderedDOM = ReactDOM.findDOMNode(component)

    const inputs = renderedDOM.querySelectorAll('input')
    expect(inputs.length).toEqual(1)
    expect(inputs[0]).toBeDefined()
    expect(inputs[0].name).toEqual('userName')
    expect(inputs[1]).toBeDefined()
    expect(inputs[1].name).toEqual('email')
    expect(inputs[2]).toBeDefined()
    expect(inputs[2].name).toEqual('phone')
  })

})
