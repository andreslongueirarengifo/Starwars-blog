import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getDataCard } from '../../services/star-wars.services';
import { Context } from '../../store/appContext';



function CardPeopleComponent(prop) {

  const [data, setData] = useState([])
  const { store, actions } = useContext(Context)

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
          <Button variant="outline-primary">Learn more!</Button>
        </Link>
        <Button variant="outline-warning" onClick={() =>{actions.addFavorite(prop.obj.name)}}><i className="fa-regular fa-heart"></i></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPeopleComponent;