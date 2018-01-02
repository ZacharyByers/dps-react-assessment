import React from 'react'
import axios from 'axios'
import { Card, Dimmer, Loader, Segment } from 'semantic-ui-react'

class Beers extends React.Component {
  state = { beers: {} }

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        this.setState({ beers: res.data })
      })
      .catch( err => console.log(err))
  }

  displayBeers = () => {
    const { beers } = this.state
    if (beers.entries)
      return beers.entries.map( (b, i) => {
        return (
          <Card>
            <Card.Content>
              <Card.Header>{b.name_display}</Card.Header>
              <Card.Meta>{b.style.short_name}</Card.Meta>
              <Card.Description>{b.description}</Card.Description>
            </Card.Content>
          </Card>
        )
      })
    return null
  }

  render() {
    const { beers } = this.state
    if (beers.entries)
      return(
        <Segment style={styles.beerList}>
          <Card.Group>
            {this.displayBeers()}
          </Card.Group>
        </Segment>
      )
    else
      return(
        <Segment style={styles.beerList}>
          <Dimmer active style={styles.loading}>
            <Loader>Loading Beers</Loader>
          </Dimmer>
        </Segment>
      )
  }
}

const styles = {
  beerList: {
    backgroundColor: 'white',
  },
  loading: {
    height: '80vh',
  },
}

export default Beers
