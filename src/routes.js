import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Cart from './pages/Cart'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pagar/:cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}