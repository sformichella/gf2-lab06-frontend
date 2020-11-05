import React, { Component } from 'react';
import request from 'superagent';

const userData = {
    userId: 1
}

export default class CreatePage extends Component {

    state = {
        fields: [],
        veracity: true,
        field_id: 1
    }

    componentDidMount = async () => {
        const response = await request.get(`https://limitless-lowlands-57794.herokuapp.com/fields`)

        this.setState({
            fields: response.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newTheorem = {
            name: this.state.name,
            difficulty: Number(this.state.diff),
            veracity: this.state.veracity,
            field_id: Number(this.state.field_id),
            owner_id: userData.userId
        }

        console.log(newTheorem);

        await request
            .post(`https://limitless-lowlands-57794.herokuapp.com/theorems`)
            .send(newTheorem)

        this.props.history.push('/')
    }

    handleInputChange = (input, e) => {
        this.setState({
            [input]: e.target.value
        })
    }

    handleDropdownChange = (input, e) => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {

        console.log(this.state);

        return (
            <div>
                <h1>Create a new Theorem!</h1>

                <form onSubmit={this.handleSubmit} className="flex-col form">

                    <label>
                        <span>Theorem Name:</span>
                        <input onChange={(e) => this.handleInputChange('name', e)}/>
                    </label>

                    <label>
                        <span>How difficult is it to understand the statement of the theorem?</span>
                        <input type="number"  onChange={(e) => this.handleInputChange('diff', e)}/>
                    </label>

                    <label>
                        <span>Is the theorem true?</span>
                        <select onChange={(e) => this.handleDropdownChange('veracity', e)}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>

                    <label>
                        <span>Which field of Math best describes this theorem?</span>
                        <select onChange={(e) => this.handleDropdownChange('field_id', e)}>
                            {
                                this.state.fields.map(field => {
                                    return <option
                                        value={field.id}
                                        key={field.id}
                                    >{field.name}
                                    </option>
                                })
                            }
                        </select>
                    </label>

                    <button>Submit</button>

                </form>

            </div>
        )
    }
}
