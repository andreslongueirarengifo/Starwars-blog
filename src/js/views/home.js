import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";


import SliderPeopleComponent from "../components/people/slider-people";
import SliderPlanetsComponent from "../components/planets/slider-planet";

import { Context } from "../store/appContext";
import { getPlanets } from "../services/planets.services.js";
import { getPeople } from "../services/people.services.js";



export const Home = () => {
    const { store, actions } = useContext(Context)
    const [people, setPeople] = useState([])
    const [planets, setPlanet] = useState([])

  useEffect(()=>{
    getPlanets().then(data => {setPlanet(data.results)})
    getPeople().then(data => {setPeople(data.results)})
  },[]);
    return(
		<>
			<h2 className="text-danger m-5 mb-0 mt-0">Characters</h2>
			<SliderPeopleComponent img={rigoImage} obj = {people}/>
			<h2 className="text-danger m-5 mb-0 mt-0">Planets</h2>
			<SliderPlanetsComponent img={rigoImage} obj = {planets}/>
		</>

    )
    };
//getPlanets().then(data => console.log(data.results))
//getPeople().then(data => console.log(data.results))