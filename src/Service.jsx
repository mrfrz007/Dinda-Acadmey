import React from 'react';
import Card from "./Card.jsx";
import Data from "./Data.jsx";


const Service = () => {



    return (

        <>

            <div my-2>

                <h2 className="text-center mt-3"> Our Unstopable Bowelrs From <span className="frz"> DinDa Academy </span></h2>

                <p className="text-center mt-0" style={{ color: "blue" }}> United We Stand Divided We Fall  </p>

            </div>
            <div className="container-fluid mx-auto" id="Service_margin">
                <div className="row" id="Service_margin">
                    <div className=" col-10 mx-auto" id="Service_margin">
                        <div className="row gy-2" id="Service_margin">

                            
                                {

                                    Data.map((value) => {

                                        return (
                                            <Card
                                                image={value.image}
                                                title={value.title}
                                                text={value.text}
                                            />
                                        )
                                    })
                                }




                            </div>
                        </div>
                    </div>
                </div>
          



        </>
    )
}

export default Service;