import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  reducer = (state, action) => {
    switch (action.type) {
      case "DELETE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          )
        };
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
   case "EDIT_CONTACT":
        return {
          ...state,
          contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload): contact)
        };
      default:
        return state;
      }
  };
  state = {
    contacts: [],
    dispatch: action => this.setState(state => this.reducer(state, action))
  };
  componentDidMount() {
    const headerMethod = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3001/api/v1/reports", headerMethod)
      .then(response => response.json())
      .then(data => this.setState({contacts: data.message}))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
