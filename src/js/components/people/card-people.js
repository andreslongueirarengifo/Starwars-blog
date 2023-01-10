import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getDataCard } from '../../services/star-wars.services';



function CardPeopleComponent(prop) {

  const [data, setData] = useState([])

/*
  useEffect(()=>{
    getDataCard(prop.obj.url).then(data=>{setData(data.result)})
  },[])*/


  return (
    <Card>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>{prop.obj.name}</Card.Title>
        <Card.Text>
            <p>Gender: a</p>
            <p>Hair Color: a</p>
            <p>Eye-Color: a</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Link to={"/characterdetail/" + 1}>
          <Button variant="primary">Learn more!</Button>
        </Link>
        <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPeopleComponent;