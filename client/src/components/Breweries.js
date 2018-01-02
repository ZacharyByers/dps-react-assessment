import React from 'react'
import axios from 'axios'
import { List, Dimmer, Loader, Segment } from 'semantic-ui-react'

class Breweries extends React.Component {
  state = { breweries: {} }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({ breweries: res.data })
      })
      .catch( err => console.log(err))
  }

  displayBreweries = () => {
    const { breweries } = this.state
    if (breweries.entries)
      return breweries.entries.map( (b, i) => {
        return <List.Item key={i}>{b.name}</List.Item>
      })
    return null
  }

  render() {
    const { breweries } = this.state
    if (breweries.entries)
      return(
        <Segment style={styles.beerList}>
          <List divided>
            {this.displayBreweries()}
          </List>
        </Segment>
      )
    else
      return(
        <Segment style={styles.beerList}>
          <Dimmer active style={styles.loading}>
            <Loader>Loading Breweries</Loader>
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

export default Breweries
