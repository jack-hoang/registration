import {createStore} from 'redux'

import rootReducer from '../reducers/reducers'

module.exports = function configureStore() {
  var store = createStore(rootReducer)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers/reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
