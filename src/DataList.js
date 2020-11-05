import React, { Component } from 'react';
import request from 'superagent';
import DataFrame from './DataFrame.js';
import {Link} from 'react-router-dom';

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
            <nav>
                <Link to="/create">Create Page</Link>
            </nav>
            <h1>Theorems!</h1>
            <div className="theorem-list">
                {
                    this.state.data.map(theorem => {
                        return <DataFrame 
                            key = {theorem.id}
                            theorem = {theorem}
                        />
                    })
                }
            </div>
            </>
        )
    }
}
