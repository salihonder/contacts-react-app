import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactList extends Component {
  render(){
    const persons = [
      {name: 'Salih'},
      {name: 'Semih'},
      {name: 'Sinan'}
    ];

    return <ol>
      {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        )
      )}
      
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />     
            <ContactList /> 
        </header>
      </div>
    );
  }
}

export default App;
