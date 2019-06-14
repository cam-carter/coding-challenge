import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalState from './context/GlobalState'
import TaskOverview from './pages/TaskOverview'
import TaskDetail from './pages/TaskDetail'

import './App.css'
import 'bulma/css/bulma.css'

const App = (props) => {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={TaskOverview} />
            <Route path='/:group' component={TaskDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalState>
  )
}

export default App
