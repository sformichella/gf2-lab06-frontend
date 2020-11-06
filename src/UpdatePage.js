import React, { Component } from 'react';
import request from 'superagent';

export default class UpdatePage extends Component {

    state ={
        theorem: {
            id: -1,
            name: '',
            difficulty: 0,
            veracity: '',
            field: '',
            owner_id: 1
        },
        fields: []
    }

    componentDidMount = async () => {
        const theorem = await request.get(`https://limitless-lowlands-57794.herokuapp.com/theorems/${this.props.match.params.id}`)

        const fields = await request.get(`https://limitless-lowlands-57794.herokuapp.com/fields`);

        this.setState({
            theorem: JSON.parse(theorem.text),
            fields: JSON.parse(fields.text)
        })
    }

    inputChange = (input, e) => {
        const theorem = this.state.theorem;
        theorem[input] = e.target.value

        this.setState({
            theorem
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const fieldArray = this.state.fields.map(field => field.name);
        const theorem = this.state.theorem;
        theorem.field_id = fieldArray.indexOf(theorem.field) + 1;
        theorem.owner_id = 1

        await request.put(`https://limitless-lowlands-57794.herokuapp.com/theorems/${this.props.match.params.id}`)
            .send(theorem);

        this.props.history.push('/theorems')

        console.log(this.state.theorem);
    }

    render() {

        return (
            <div className="update-frame flex-col">
                <h1>Update a Theorem!</h1>
                <form onSubmit={this.handleSubmit} className="flex-col">
                    <div>
                        <span>Name: </span>
                        <input
                            value={this.state.theorem.name}
                            onChange={(e) => this.inputChange('name', e)}
                        />
                    </div>
                    <div>
                        <span>Difficulty: </span>
                        <input 
                            value={this.state.theorem.difficulty}
                            onChange={(e) => this.inputChange('difficulty', e)}
                            type="number"
                        />
                    </div>
                    <div>
                        <span>Veracity: </span>
                        <select 
                            onChange={(e) => this.inputChange('veracity', e)}
                            value={this.state.theorem.veracity}    
                        >
                            {
                                [true, false].map(bool => {
                                    return <option
                                        key={bool}
                                        value={bool}
                                    >
                                        {String(bool)}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <span>Field: </span>
                        <select
                            value={this.state.theorem.field}
                            onChange={(e) => this.inputChange('field', e)}
                        >
                            {
                                this.state.fields.map(field => {
                                    return <option
                                        key={field.id}
                                    >
                                        {field.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
