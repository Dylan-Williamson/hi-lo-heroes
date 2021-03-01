import React, { Component } from 'react'
import '../src/App.css'
// import Nav from '../src/components/Nav'
import Home from './containers/Home'
import CounterPage from './containers/CounterPage'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Nav/> */}
        <Switch>
          <Route exact path='/practice' component={ CounterPage }/>
          <Route exact path='/' component={ Home }/>
          <Redirect from="*" to={ "/" }/>
        </Switch>
      </div>
    )};
}

export default App;