import React  from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'

import configureStore from './redux/configureStore'
import makeRoutes from './routes'
import Root from './containers/Root'

const store = configureStore()
const routes = makeRoutes(store)

let register = () => {
  console.log("REGISTERED!!!")
}

ReactDOM.render(
  <Root routes={routes} store={store} />,
  document.querySelector('#app')
)
