import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {

    return (
        <>
           <div className="col-md-4 col-10" id= "Service_margin" >
                <div class="card"  >
                    <img class="card-img-top"   id="size" src={props.image} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                      
                    </div>
                </div>
            </div>
          

        </> 
    )
};

export default Card;