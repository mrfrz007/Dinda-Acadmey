import React from 'react';


const Home = () => {

    return (

        <>
            <section id="bg" className=" d-flex justify-content-center">
                <div className=" container-fluid col-md-10 ml-auto"  >
                    <div className="row">
                        <div className="col-md-4 mt-9" id="title" >
                            <h1 className="title">Welcome To <span className="frz"> DinDa Academy </span></h1>
                            <h7 className="para">We Welcome New Extra Ordinary Bowlers.</h7>
                            <p>This Academy Was Started By On Of Legend Bowler <span className="frz">Sir Ashoke Dinda</span></p>

                            <div className="button">
                                <a href="/service" id="button" className="btn btn-primary my-3 mx-2    ">New Recruits</a>
                            </div>
                        </div>

                        <div className="col-md-6 ml-auto " id="anim " >
                            <img
                                className="image"
                                src="https://moneyball.insidesport.co/img/singleplayer/AshokDinda1.jpg"

                            />
                        </div>
                        <div className=" col-md-3 ml-auto ">
                            <p className="para" > Founder Of <span className="frz"> DinDa Academy </span></p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Home;