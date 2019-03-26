import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
    state = {
        name: '',
        latitude: '',
        description: '',
        status: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    componentDidMount() {
        const {id} = this.props.match.params;
            const headerMethod = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = (data) => data.message[0];
         fetch(`http://localhost:3001/api/v1/reports/${id}`, headerMethod)
      .then(response => response.json())
      .then(data =>  this.setState({name: res(data).name, latitude: res(data).latitude, description: res(data).description, status: res(data).status}))
      .catch(e => console.log(e));
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
    const {latitude} = this.state;
    const updateContact ={
        latitude,
        longitude: '4567',
    }
        const {id} = this.props.match.params;
  const headerMethod = {
      method: "PATCH",
      body: JSON.stringify(updateContact),
      headers: {
        "Content-Type": "application/json"
      }
    };
         fetch(`http://localhost:3001/api/v1/reports/${id}/edit`, headerMethod)
      .then(response => response.json())
      .then(res => dispatch({ type: 'EDIT_CONTACT', payload: res.message[0] }))
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
                                    <input type="submit" value="Update Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )

    }
}

export default EditContact;