import configureStore from './configureStore'
import * as types from '../actions/ActionTypes'
import * as actions from '../actions/actions'

describe('store', () => {
  let store = null

  beforeEach(() => {
    store = configureStore()
  })

  it('should start with a blank registration state', () => {
    const initialState = { }
    expect(store.getState().registration).toEqual(initialState)
  })

  it('dispatch '+types.FORM_UPDATE+' should add user information to registration', () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }
    const expectedState = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }
    store.dispatch(actions.formUpdate(formData))
    expect(store.getState().registration).toEqual(expectedState)
  })

})
