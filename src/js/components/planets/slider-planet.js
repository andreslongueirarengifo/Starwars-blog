import React from "react"
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import CardPlanetComponent from "./card-planet";


function SliderPlanetsComponent(prop){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
    return(
        <div className="slider">
        <Slider {...settings}>
        {prop.obj.map((item,i)=>{
                return(
                    <div key ={i}>
                        <CardPlanetComponent img={prop.img} obj={item}/>
                    </div>
                )
            })
        }
        </Slider>
      </div>
    )
    /**
     *         {prop.obj.map((item,i)=>{
                return(
                    <div>
                        <CardComponent img={prop.img}/>
                    </div>
                )
            })
        }
     */
};



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}onClick={onClick}
      >
        <ArrowForwardIos style={{color: 'blue', fontSize: '30px'}}/>
      </div>
    );
  }
  
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} onClick={onClick}
      >
        <ArrowBackIos style={{color: 'blue', fontSize: '30px'}}/>
      </div>
    );
  }


export default SliderPlanetsComponent;