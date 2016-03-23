import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'

import TextInput from './TextInput'

describe('when a TextInput is declared', () => {

  it('renders a text input', () => {
    const component = renderIntoDocument(
      <TextInput id='group' label='Group' />
    )

    const renderedDOM = ReactDOM.findDOMNode(component)

    const label = renderedDOM.querySelector('label')
    expect(label.htmlFor).toEqual('group')
    expect(label.textContent).toEqual('Group')

    const input = renderedDOM.querySelector('input')
    expect(input.name).toEqual('group')

  })

})
