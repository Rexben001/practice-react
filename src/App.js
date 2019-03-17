import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import './assets/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <Contacts />
                </div>

            </div>
        )
    }
}

export default App;