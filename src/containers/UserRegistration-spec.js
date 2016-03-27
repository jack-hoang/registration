import React from 'react'
import ReactDOM from 'react-dom'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils'
import configureStore from '../store/configureStore'

import * as actions from '../actions/actions'
import * as types from '../actions/ActionTypes'

import UserRegistration from './UserRegistration'

describe('UserRegistration', () => {

  it('dispatches '+types.FORM_UPDATE+' when form is submitted', () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    const store = configureStore()
    spyOn(store, 'dispatch')

    const component = renderIntoDocument(
      <UserRegistration store={store}/>
    )

    const renderedDOM = ReactDOM.findDOMNode(component)
    const inputs = renderedDOM.querySelectorAll('input')
    Array.from(inputs).forEach((i) => {
      i.value = formData[i.id]
      Simulate.change(i)
    })

    const form = findRenderedDOMComponentWithTag(component, 'form');
    Simulate.submit(form)

    expect(store.dispatch).toHaveBeenCalledWith(actions.formUpdate(formData))
  })

})
