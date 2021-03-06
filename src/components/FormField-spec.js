import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'

import FormField from './FormField'

describe('when a FormField is declared with id="user", label="User"', () => {

  it('renders a field with an id of "user", has a label "User"', () => {
    const component = renderIntoDocument(
      <FormField id='user' label='User' />
    );

    const renderedDOM = ReactDOM.findDOMNode(component)
    const label = renderedDOM.querySelector('label')

    expect(label.htmlFor).toEqual('user')
    expect(label.textContent).toEqual('User')
  })

})
