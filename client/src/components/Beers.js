import React from 'react'
import axios from 'axios'
import { List, Dimmer, Loader, Segment } from 'semantic-ui-react'

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
        return <List.Item key={i}>{b.name}</List.Item>
      })
    return null
  }

  render() {
    const { beers } = this.state
    if (beers.entries)
      return(
        <Segment style={styles.beerList}>
          <List divided>
            {this.displayBeers()}
          </List>
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
