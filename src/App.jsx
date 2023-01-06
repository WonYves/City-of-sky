import React, { Fragment, useState } from 'react'
import renderRoutes from './router/routes'
import routes from './router/index'
import { Switch } from 'react-router-dom'
const App = () => (
  <Fragment>
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </Fragment>
)

export default App
