import React  from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configureStore from './store/configureStore'
import makeRoutes from './routes'
import Root from './containers/Root'

const store = configureStore()
const routes = makeRoutes(store)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.querySelector('#app')
)
