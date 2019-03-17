import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteClickHandler: PropTypes.func.isRequired
    }
    state = { showInfo: false };
    deleteContact = () => {
        this.props.deleteClickHandler()
    }
    render() {
        const { name, email, phone } = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <span style={{ fontStyle: 'italic', color: 'blue', cursor: 'pointer' }} onClick={() => this.setState({ showInfo: !this.state.showInfo })}> v</span>
                    <span style={{ fontStyle: 'italic', color: 'red', cursor: 'pointer', float: 'right' }} onClick={this.deleteContact}> X</span>
                </h4>
                {this.state.showInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
            </div >
        )
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,

// }
export default Contact;