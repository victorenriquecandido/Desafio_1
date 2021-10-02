import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pedido from '../pages/pedido'

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Pedido} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
