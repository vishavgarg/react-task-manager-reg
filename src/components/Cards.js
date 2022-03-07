import React from 'react'
import { Card, Button, Stack} from 'react-bootstrap';

export default function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className="mx-3">
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Check this</Button>
  </Card.Body>
</Card>
  )
}
