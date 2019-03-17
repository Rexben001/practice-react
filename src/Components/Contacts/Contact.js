import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    }
    state = { showInfo: false };
    deleteContact = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
    render() {
        const { id, name, email, phone } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <span style={{ fontStyle: 'italic', color: 'blue', cursor: 'pointer' }} onClick={() => this.setState({ showInfo: !this.state.showInfo })}> v</span>
                                <span style={{ fontStyle: 'italic', color: 'red', cursor: 'pointer', float: 'right' }} onClick={this.deleteContact.bind(this, id, dispatch)}> X</span>
                            </h4>
                            {this.state.showInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            ) : null}
                        </div >
                    )
                }}
            </Consumer>
        )
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,

// }
export default Contact;