import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick(){
    alert('Cliiiick')
  }

  render() {

    var cosita = 'Hola mundo'
    const mensaje = 'Bienvenido a React'
    const lista = ['eins', 'dois', 'san', 'cuatro']

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{mensaje}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          { true ? cosita : 'Perro loco' }
        </div>
        <div>
          {
            lista.map( elemento => {
                return (
                  <div onClick={this.onClick}>{elemento}</div>
                );
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
