import {render} from "react-dom";
import React from "react";
import {Link} from 'react-router';

class Calculate extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'parent',
            age: 30
        }
    }

    render() {
        return <div>
            <h1>parent</h1>
            <p>{this.state.name}的年龄为{this.state.age}岁</p>
            <Link to="/child">child</Link>
        </div>;
    }
}

module.exports = Calculate;

