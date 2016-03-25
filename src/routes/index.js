import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import RegistrationForm from '../components/RegistrationForm'

export default (store) => (
  <Route path='/' component={App}>
    <IndexRoute component={RegistrationForm} />
  </Route>
)
