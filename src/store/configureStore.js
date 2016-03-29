import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers/reducers'

export default function configureStore() {
  const middleware = routerMiddleware(browserHistory)
  const store = createStore(rootReducer, applyMiddleware(middleware))

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
