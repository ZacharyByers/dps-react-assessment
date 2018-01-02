import React from 'react'
import NoMatch from './NoMatch'
import NavBar from './NavBar'
import Flash from './Flash'
import Home from './Home'
import Beers from './Beers'
import Breweries from './Breweries'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/breweries' component={Breweries} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    )
  }
}

export default App
