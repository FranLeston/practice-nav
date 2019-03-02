import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import ContactItem from './components/ContactItem';

import contacts from './data/contacts.json';

class App extends Component {
  render() {

    const FoundContact = (props) => {
      const contact = contacts.find(contact => String(contact.id) === props.match.params.id)
      return <ContactItem { ...contact} />
    }


    return (
      <div className="App">
        <NavBar/>

        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/contacts" component={Contacts} />

              <Route exact path="/contacts/:id" component={FoundContact} />
              <Redirect to="/home"/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;