import React from "react"
import CardPlanetComponent from "./card-planet";


function SliderPlanetsComponent(prop){

    return(
        <div className="slider">
        {prop.obj.map((item,i)=>{
                return(
                    <div key ={i}>
                        <CardPlanetComponent img={prop.img} obj={item} index={i+1}/>
                    </div>
                )
            })
        }
      </div>
    )
};



export default SliderPlanetsComponent;