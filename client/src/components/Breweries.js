import React from 'react'
import axios from 'axios'
import { Card, Image, Dimmer, Loader, Segment } from 'semantic-ui-react'
import InfiniteScroll from 'react-infinite-scroller'

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
          <Card.Group itemsPerRow={4}>
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
