import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    createID = () => {
        const id = Math.floor(Math.random() * 8980) + 101;
        return id;
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;
        const newContact = {
            id: this.createID(),
            name,
            email,
            phone
        };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contacts
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name="name"
                                        label="Name"
                                        placeholder="Enter a name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="email"
                                        label="Email"
                                        placeholder="Enter an email"
                                        value={email}
                                        type={email}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter a phone"
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )

    }
}

export default AddContacts;