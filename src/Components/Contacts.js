import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '23456789'
            },
            {
                id: 2,
                name: 'John Doe2',
                email: 'john2@gmail.com',
                phone: '234567892'
            },
            {
                id: 3,
                name: 'John Doe3',
                email: 'john3@gmail.com',
                phone: '234567893'
            },
        ]
    }
    deleteContent = (id) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact =>
            contact.id !== id);
        this.setState({ contacts: newContacts })
    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        deleteClickHandler={this.deleteContent.bind(this, contact.id)}
                        contact={contact} />
                )}
            </React.Fragment>
        )
    }
}


export default Contacts;