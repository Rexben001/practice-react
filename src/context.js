import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    reducer = (state, action) => {
        switch (action.type) {
            case 'DELETE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.filter(contact => contact.id !== action.payload)
                }
            default:
                return state;
        }
    }
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
        ],
        dispatch: action => this.setState(state => this.reducer(state, action))

    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;