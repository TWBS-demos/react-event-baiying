import React, {Component} from "react";
import {Render} from "react-dom";
import {Link} from "react-router";

class Child extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Child',
            age: 10
        }
    }

    add() {
        const age = this.state.age + 1;
        this.setState({
            age
        })
    }

    reduce() {
        const age = this.state.age - 1;
        this.setState({
            age
        })
    }

    render() {
        return <div>
            <h1>child</h1>
            <button onClick={this.add.bind(this)}>增加</button>
            <button onClick={this.reduce.bind(this)}>减少</button>
            <p>{this.state.name}的年龄为{this.state.age}岁</p>
            <Link to="/">parent</Link>
        </div>
    }
}

module.exports = Child;