import React, { Component } from 'react'
import request from 'superagent';
import DataFrame from './DataFrame.js';

export default class DataList extends Component {

    state = {
        data: [],
    }

    componentDidMount = async () => {
        const data = await request.get(`https://limitless-lowlands-57794.herokuapp.com/theorems`);

        this.setState({
            data: JSON.parse(data.text)
        })
    }

    render() {
        return (
            <>
            <h1>Theorems!</h1>
            <div className="theorem-list">
                {
                    this.state.data.map(theorem => {
                        return <DataFrame 
                            theorem = {theorem}
                        />
                    })
                }
            </div>
            </>
        )
    }
}
