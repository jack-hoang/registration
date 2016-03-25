import React  from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import configureStore from './store/configureStore'
import makeRoutes from './routes'
import Root from './containers/Root'

const store = configureStore()
const routes = makeRoutes(store)

let register = () => {
  console.log("REGISTERED!!!")
}

ReactDOM.render(
  <Root history={hashHistory} routes={routes} store={store} />,
  document.querySelector('#app')
)
