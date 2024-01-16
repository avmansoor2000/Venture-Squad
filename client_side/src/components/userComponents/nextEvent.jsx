import React from 'react'
import EventBanner from '../../../public/images/eventBanner'
import {Container,Row,Col} from 'react-bootstrap'

const nextEvent = () => {
    
  return (
    <Container>
      <Row>
    <img src={EventBanner} alt="eventBanner" />
    </Row>
    </Container>
    
  )
}

export default nextEvent