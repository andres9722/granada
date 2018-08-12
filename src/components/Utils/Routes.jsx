import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard.jsx'
import ViewBook from '../Pages/ViewBook.jsx'
import Error404 from '../Pages/Error404.jsx'
import AddBook from '../Pages/AddBook.jsx'
import EditBook from '../Pages/EditBook.jsx'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/book/:ID' component={ViewBook} />
    <Route exact path='/book/:ID/edit' component={EditBook} />
    <Route exact path='/books/new' component={AddBook} />
    <Route component={Error404} />
  </Switch>
)

export default Routes
