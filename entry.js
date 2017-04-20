import {render} from "react-dom";
import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import HomePage from "./HomePage";
import Calculate from "./Parent";
import Child from "./Child";

render(<Router history={hashHistory}>
        <Route path="/" component={HomePage}>
            <IndexRoute component={Calculate}/>
            <Route path="child" component={Child}/>
        </Route>
    </Router>,
    document.getElementById('content'));
