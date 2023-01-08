import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context)
    console.log(store.planets)
    console.log(store.people)
    return(
        <div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
    )
    };
//getPlanets().then(data => console.log(data.results))
//getPeople().then(data => console.log(data.results))