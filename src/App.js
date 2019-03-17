import React, { Component } from 'react';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/layout/Header';
import AddContacts from './Components/Contacts/AddContacts';

import { Provider } from './context';
import './assets/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Header />
                    <div className="container">
                        <AddContacts />
                        <Contacts />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;