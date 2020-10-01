import React from 'react';
import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Home from "./Home";
import { Route, Switch } from 'react-router-dom';
import Footeer from "./Footeer.jsx";


const App=()=>{

    return(

        
        <>
        <Nav/>
        <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/service" component={Service}/>
            <Route  exact path="/contact" component={Contact}/>
            <Route  exact path="/about" component={About}/>
        </Switch>
        <Footeer/>  
        </>
    )
};
export default App;