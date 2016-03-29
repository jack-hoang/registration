import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import UserRegistration from '../containers/UserRegistration'
import VerifyRegistration from '../containers/VerifyRegistration'


export default (store) => (
  <Route path='/' component={App}>
    <IndexRoute component={UserRegistration} />
    <Route path='/verify' component={VerifyRegistration} />
  </Route>
)
