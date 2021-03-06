import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddContacts extends Component {
    state = {
        name: '',
        latitude: '',
        description: '',
        status: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    createID = () => {
        const id = Math.floor(Math.random() * 8980) + 101;
        return id;
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, latitude, description, status } = this.state;
        const newContact = {
            name,
            latitude,
            description,
            longitude: '23467',
            status,
            placedBy: 1
        };
         const headerMethod = {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-Type": "application/json"
      }
    };
  fetch(`http://localhost:3001/api/v1/reports`, headerMethod)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.message[0] }))
      .catch(e => console.log(e));
        

        this.setState({
            name: '',
            latitude: '',
            description: '',
            status: ''
        });
        this.props.history.push('/');
    }
    render() {
        const { name, latitude, description, status } = this.state;
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
                                        name="latitude"
                                        label="latitude"
                                        placeholder="Enter a latitude"
                                        value={latitude}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="description"
                                        label="Description"
                                        placeholder="Enter a description"
                                        value={description}
                                        onChange={this.onChange}
                                    />
                                      <TextInputGroup
                                        name="status"
                                        label="Status"
                                        placeholder="Enter a status"
                                        value={status}
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