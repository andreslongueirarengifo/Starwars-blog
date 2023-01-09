import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import CardComponent from "../components/card";
import SliderCardComponent from "../components/slidercard";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context)
    console.log(store.planets)
    console.log(store.people)
    return(
		<>
			<h2>Characters</h2>
			<SliderCardComponent img={rigoImage}/>
			<h2>Planets</h2>
			<SliderCardComponent img={rigoImage}/>
		</>

    )
    };
//getPlanets().then(data => console.log(data.results))
//getPeople().then(data => console.log(data.results))