import React, { Component } from 'react';
import DataFrame from './DataFrame.js';
import {Link} from 'react-router-dom';
import {getTheorems} from './utils.js';

export default class DataList extends Component {

    state = {
        data: [],
    }

    componentDidMount = async () => {
        const data = await getTheorems();

        this.setState({
            data
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
