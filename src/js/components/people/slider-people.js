import React from "react"
import CardPeopleComponent from "./card-people";

function SliderPeopleComponent(prop){
    return(
        <div className="slider">
        {prop.obj.map((item,i)=>{
                return(
                    <div key ={i}>
                        <CardPeopleComponent img={prop.img} obj={item} index={i+1}/>
                    </div>
                )
            })
        }
      </div>
    )
};

export default SliderPeopleComponent;