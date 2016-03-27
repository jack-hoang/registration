import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import UserRegistration from '../containers/UserRegistration'

export default (store) => (
  <Route path='/' component={App}>
    <IndexRoute component={UserRegistration} />
  </Route>
)
