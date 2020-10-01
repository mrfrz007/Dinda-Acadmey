import React from 'react';


const About = () => {

    return (
        <>

        <div className="">
        <h1 className="title text-center">About <span className="frz"> DinDa Academy </span></h1>
        </div>
            <section id="" className=" d-flex justify-content-center">
                <div className=" container-fluid col-md-10 ml-auto"  id="Service_margin" >
                    <div className="row"   id="Service_margin">
                        <div className="col-md-4 mt-9" id="title"   id="Service_margin">
                           
                            <h7 className="para">Work Hard To Be A Part Of <span className="frz">Sir Ashoke Dinda</span></h7>
                            <p>
                                Dinda Academy is an academy started by Lord     <span className="frz">Sir Ashoke Dinda</span>.

                                The requirement for getting selected in this academy is to perfom exceptionally well and win the matches singlehandedly for the Opposition team in IPL,

                                these are some Legends who are part of Dinda Academy :-

                              <li> 
                                  <ol>Lord Ashok Dinda,<span style={{color:"red"}}> President</span></ol>

                                <ol>Lord Jaydev Unadkat, <span  style={{color:"red"}}>Vice President</span></ol>

                                <ol>Lord MD Siraj, <span  style={{color:"red"}}>Current Best performer</span></ol> 

                                <ol>Lord Umesh Yadav,<span  style={{color:"red"}}>Senior Member</span> </ol>

                                <ol>Lord Basil Thampi,<span  style={{color:"red"}}> Best Newcomer</span></ol> 

                                And many more.
                                </li>

                            </p>

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

export default About;