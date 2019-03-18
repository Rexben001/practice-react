import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/layout/Header';
import AddContacts from './Components/Contacts/AddContacts';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import { Provider } from './context';
import './assets/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/contacts/add" component={AddContacts} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;