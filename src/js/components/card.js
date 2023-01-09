import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(prop) {
  return (
    <Card style={{ width: '500px', margin: '10px' }}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            <p>Some quick example text to build on the card title and make up the</p>
            <p>Some quick example text to build on the card title and make up the</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;