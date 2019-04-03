import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{deleteContact} from '../../actions/contactActions';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    //// DELETE CONTACT ////
    this.props.deleteContact(id)

  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <span
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer', color: 'blue' }}>V
          </span>
          <span style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}>X
          </span>
          <Link to={`contact/edit/${id}`}>
            <span  style={{
                cursor: 'pointer',
                float: 'right',
                color: 'blue',
                marginRight: '1rem'
              }}>
             Edit
            </span>
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(null, {deleteContact})(Contact);
