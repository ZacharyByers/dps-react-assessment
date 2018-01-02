import React from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import { Card, Image, Dimmer, Loader, Segment } from 'semantic-ui-react'

class Beers extends React.Component {
  state = { beers: [], hasMore: true }

  displayBeers = () => {
    const { beers } = this.state
    if (beers)
      return beers.map( (b, i) => {
        return (
          <Card>
            <Card.Content>
              {b.labels && <Image src={b.labels.medium} />}
              <Card.Header>{b.name_display}</Card.Header>
              {b.style && <Card.Meta>{b.style.short_name}</Card.Meta>}
              <Card.Description>{b.description}</Card.Description>
            </Card.Content>
          </Card>
        )
      })
    return null
  }

  loadMore = (page) => {
    axios.get(`/api/all_beers?page=${page}&per_page=10`)
      .then( res => {
        const data = res.data
        const { beers } = this.state
        let hasMore = data.page === data.total_pages ? false : true
        this.setState({ beers: [...beers, ...data.entries], hasMore })
      })
      .catch( err => console.log(err) )
  }

  render() {
    const { beers } = this.state
    return(
      <Segment style={styles.beerList}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMore}
          loader={<div style={styles.loading}>Loading...</div>}
          useWindow={true}
          threshold={400}
        >
          <Card.Group>
            {this.displayBeers()}
          </Card.Group>
        </InfiniteScroll>
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
    textAlign: 'center',
    marginTop: '10vh',
  },
}

export default Beers
