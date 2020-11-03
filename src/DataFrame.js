import React, { Component } from 'react'

export default class DataFrame extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.theorem.name}</h3>
                <ul>
                    <li>{this.props.theorem.difficulty}</li>
                    <li>{String(this.props.theorem.veracity)}</li>
                    <li>{this.props.theorem.field}</li>
                </ul>
            </div>
        )
    }
}
