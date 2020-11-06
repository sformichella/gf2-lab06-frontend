import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class DataFrame extends Component {
    render() {
        return (
            <div className="data-frame">
                <h3><Link to={`/theorems/${this.props.theorem.id}`}>{this.props.theorem.name}</Link></h3>
                <ul>
                    <li>Difficulty: {this.props.theorem.difficulty}</li>
                    <li>It's {String(this.props.theorem.veracity)}</li>
                    <li>Field of Math: {this.props.theorem.field}</li>
                </ul>
            </div>
        )
    }
}
