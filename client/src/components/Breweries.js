import React from 'react'
import axios from 'axios'
import { Card, Image, Dimmer, Loader, Segment } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'

class Breweries extends React.Component {
  state = { breweries: [], hasMore: true }

  loadMore = (page) => {
    axios.get(`/api/all_breweries?page=${page}&per_page=12`)
      .then( res => {
        const data = res.data
        const { breweries } = this.state
        let hasMore = data.page === data.total_pages ? false : true
        this.setState({ breweries: [...breweries, ...data.entries], hasMore })
      })
      .catch( err => console.log(err) )
  }

  displayBreweries = () => {
    const { breweries } = this.state
    if (breweries)
      return breweries.map( (b, i) => {
        let name = b.name
        if (name === '#FREEDOM Craft Brewery')
          name = 'FREEDOM Craft Brewery'
        const image = b.images ? b.images.square_medium : 'http://shashgrewal.com/wp-content/uploads/2015/05/default-placeholder-300x300.png'
        return (
          <Card as={ Link } name='brewery' to={`/brewery/${name}`}>
            <Image src={image} />
            <Card.Content>
              <Card.Header>{b.name_short_display}</Card.Header>
              {b.established && <Card.Meta>Est. {b.established}</Card.Meta>}
            </Card.Content>
          </Card>
        )
      })
    return null
  }

  render() {
    return(
      <Segment basic>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMore}
          loader={<div style={styles.loading}>Loading...</div>}
          useWindow={true}
          threshold={400}
        >
          <Card.Group itemsPerRow={4} stackable>
            {this.displayBreweries()}
          </Card.Group>
        </InfiniteScroll>
      </Segment>
    )
  }
}

const styles = {
  loading: {
    height: '40vh',
    textAlign: 'center',
    marginTop: '10vh',
  },
}

export default Breweries
