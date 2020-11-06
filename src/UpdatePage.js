import React, { Component } from 'react';
import {
    deleteTheorem,
    getFields,
    getTheorem,
    updateTheorem
} from './utils.js'

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
        const theorem = await getTheorem(this.props.match.params.id);

        const fields = await getFields();

        this.setState({
            theorem,
            fields
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

        // Grab theorem data
        const theorem = this.state.theorem;
        // Make an array out of the fields data.
        // This is used to get the field_id number for 
        // the put request
        const fieldArray = this.state.fields.map(field => field.name);
        theorem.field_id = fieldArray.indexOf(theorem.field) + 1;
        // Set the owner_id prop since the request needs it
        theorem.owner_id = 1

        await updateTheorem(this.props.match.params.id, theorem);

        this.props.history.push('/theorems')
    }

    handleDelete = async () => {
        await deleteTheorem(this.props.match.params.id);

        this.props.history.push('/theorems')
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
                <button onClick={this.handleDelete}>Delete Theorem</button>
            </div>
        )
    }
}
