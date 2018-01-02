import React from 'react'
import axios from 'axios'
import { Card, Image, Dimmer, Loader, Segment } from 'semantic-ui-react'

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
        const image = b.images ? b.images.square_medium : 'http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder-300x300.png'
        return (
          <Card>
            <Image src={image} />
            <Card.Content>
              <Card.Header href={b.website}>{b.name_short_display}</Card.Header>
              {b.established && <Card.Meta>Est. {b.established}</Card.Meta>}
              <Card.Description>{b.description || 'No Description Available'}</Card.Description>
            </Card.Content>
          </Card>
        )
      })
    return null
  }

  render() {
    const { breweries } = this.state
    if (breweries.entries)
      return(
        <Segment style={styles.beerList}>
          <Card.Group>
            {this.displayBreweries()}
          </Card.Group>
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
