import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

class App extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "Soy un título"
    }

    this.enCambio = this.enCambio.bind(this);
  }

  onClick(){
    alert('Cliiiick')
  }

  onChange(event){
    console.log(event.target.value);
  }

  onSubmit(event){
    event.preventDefault();
    console.log("Enviado " + this.input.value);
  }

  enCambio(){
    this.setState({
      title:"Otro título mas riatas"
    });
  }

  render() {

    var cosita = 'Hola mundo'
    const mensaje = 'Bienvenido a React!'
    const lista = ['eins', 'dois', 'san', 'cuatro']

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{mensaje}</h1>
        </header>
        <p className="App-intro">
          Editale el <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.enCambio}>
          {this.state.title}
        </div>
        <div>
          { true ? cosita : 'Perro loco' }
        </div>
        <div>
          {
            lista.map( elemento => {
                return (
                  <div key={elemento} onClick={this.onClick}>{elemento}</div>
                );
              }
            )
          }
        </div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} ref={input =>  this.input = input}/>
        </form>
        <div>
          <MiComponente
            titulo="Esto parece verdad para mí."
            descripcion = "Es una señal."
            onClick = {this.onClick}
          />
        </div>
      </div>

    );
  }
}

export default App;
