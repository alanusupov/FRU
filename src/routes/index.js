import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from '../components/main'
import about from '../components/about'
import Contacts from '../components/Contacts'
import { PrivateRoute } from '../components/privateroute'
import { history } from '../helpers/history'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import { RegisterPage } from '../components/RegisterPage'
import base from '../components/base'

import cart from '../components/cart'
import Payment from '../components/Payment'
import ProductDetails from '../components/ProductDetails'
import Product from '../components/Product'

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Main>
          
          <Route exact path="/base" component={base} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/cart" component={cart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/product" render={(props)=>(
            <Product {...props} dis={"none"}/>
          )}/>
          <Route exact path="/about" component={about} />
          <Route exact path="/contacts" component={Contacts} />
          <PrivateRoute  path="/admin" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Redirect from="*" to="/base" />
        </Main>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
