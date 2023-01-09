import React from "react"
import CardComponent from "./card"



function SliderCardComponent(prop){
    return(
        <>
            <div className="d-flex flex-row overflow">
            <CardComponent img={prop.img}/><CardComponent img={prop.img}/><CardComponent img={prop.img}/><CardComponent img={prop.img}/><CardComponent img={prop.img}/>
            </div>
        </>
    )
};

export default SliderCardComponent;