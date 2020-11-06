import React, { Component } from 'react';
import request from 'superagent';

export default class UpdatePage extends Component {

    state ={
        theoremData: []
    }

    componentDidMount = async () => {
        const theorem = await request.get(`https://limitless-lowlands-57794.herokuapp.com/theorems/${this.props.match.params.id}`)

        this.setState({
            theoremData: JSON.parse(theorem.text)
        })
    }

    render() {

        return (
            <div>
                <h1>Update a Theorem!</h1>

            </div>
        )
    }
}
