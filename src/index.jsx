import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Main from "./components/Main";

// Foundation loader
require("style!css!foundation-sites/dist/css/foundation.min.css");
require("style!css!sass!style/app.scss");


ReactDOM.render(

<Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
</Router>

,document.getElementById("root"));
