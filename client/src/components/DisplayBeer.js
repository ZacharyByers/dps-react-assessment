import React from 'react'
import axios from 'axios'
import { Segment, Image, Header } from 'semantic-ui-react'

class DisplayBeer extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    const { name } = this.props.match.params
    axios.get(`/api/beer/${name}`)
      .then( res => this.setState({ beer: res.data.entries[0] }) )
      .catch( err => console.log(err) )
  }

  render() {
    const { beer } = this.state
    return(
      <Segment basic>
        <Header textAlign='center' as='h2'>{beer.name}</Header>
        {beer.labels && <Image centered src={beer.labels.medium} />}
        <Segment textAlign='center'>{beer.description}</Segment>
      </Segment>
    )
  }
}

export default DisplayBeer
