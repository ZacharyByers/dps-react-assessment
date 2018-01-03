import React from 'react'
import axios from 'axios'
import { Header, Segment, Image, Button } from 'semantic-ui-react'

class DisplayBrewery extends React.Component {
  state = { brewery: {} }

  componentDidMount() {
    const { name } = this.props.match.params
    if (name === 'FREEDOM Craft Brewery') {
      axios.get('/api/all_breweries')
        .then( res => this.setState({ brewery: res.data.entries[0]}) )
        .catch( err => console.log(err) )
    } else {
      axios.get(`/api/brewery/${name}`)
        .then( res => this.setState({ brewery: res.data.entries[0] }) )
        .catch( err => console.log(err) )
    }
  }

  render() {
    const { brewery } = this.state
    return(
      <Segment textAlign='center' basic>
        {
          (brewery.images && <Image centered src={brewery.images.large} />) ||
          <Header textAlign='center' as='h2'>{brewery.name}</Header>
        }
        { brewery.description && <Segment>{brewery.description}</Segment>}
        { brewery.established && <Segment basic textAlign='right' size='mini'>Est. {brewery.established}</Segment>}
        { brewery.website && <Button primary textAlign='center' href={brewery.website}>Website</Button>}
      </Segment>
    )
  }
}

export default DisplayBrewery
