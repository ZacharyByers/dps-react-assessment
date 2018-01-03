import React from 'react'
import axios from 'axios'
import { Segment, Image, Header } from 'semantic-ui-react'

class DisplayBeer extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    const { name } = this.props.match.params
    axios.get(`/api/beer/${name}`)
      .then( res => this.setState({ beer: res.data.entries[0] }) )
      .catch( err => this.setState({ error: 'yup' }) )
  }

  render() {
    const { beer } = this.state
    if (!this.state.error)
      return(
        <Segment basic>
          <Header textAlign='center' as='h2'>{beer.name}</Header>
          {beer.style && <Segment basic size='mini' textAlign='center'>{beer.style.short_name}</Segment>}
          {beer.labels && <Image centered src={beer.labels.medium} />}
          {beer.description && <Segment textAlign='center'>{beer.description}</Segment>}
        </Segment>
      )
    else
      return(
        <Segment>API Error, Beer not found.</Segment>
      )
  }
}

export default DisplayBeer
