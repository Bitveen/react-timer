import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Main from "./components/Main";
import Timer from "Timer";
import Countdown from "Countdown";



// Foundation loader
require("style!css!foundation-sites/dist/css/foundation.min.css");

// Sass styles
require("style!css!sass!style/app.scss");


ReactDOM.render(

<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown} />
        <IndexRoute component={Timer} />
    </Route>
</Router>

,document.getElementById("root"));
