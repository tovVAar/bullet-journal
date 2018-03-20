import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import ProductItem from './productItem.js'
import AddProduct from './addProduct.js'

const products = [
  {
    name: 'pepsi',
    price: 10
  },
  {
    name: 'coca',
    price: 15
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  componentWillMount(){
    const myProducts = this.getProducts();
    this.setState({ourProducts: myProducts});
    console.log(myProducts);
  }

  getProducts(){
    return this.state.ourProducts;
  }


  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "Soy un título",
      ourProducts: JSON.parse(localStorage.getItem('products'))
    };

    this.enCambio = this.enCambio.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }

  onAdd(name, price){
    const myProducts = this.getProducts();
    myProducts.push({name, price});
    console.log(name, price);
    this.setState({
      ourProducts: myProducts
    });
  }

  onEditSubmit(name, price, originalName){
    let myProducts = this.getProducts();
    myProducts = myProducts.map(product => {
      if(product.name === originalName){
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({ourProducts: myProducts});
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

  onDelete(name){
    const myProducts = this.getProducts();

    const filteredProducts = myProducts.filter(product => {
      return product.name !== name;
    });

    this.setState({ourProducts: filteredProducts});
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
        <AddProduct
          onAdd = {this.onAdd}
        />
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
            onClicked = {this.onClick}
          />
        </div>
        <div>
          {
            this.state.ourProducts.map( product => {
              return (
                <ProductItem
                  key={product.name}
                  {...product}
                  onDelete = {this.onDelete}
                  onEditSubmit = {this.onEditSubmit}
                />
              );
            })
          }
        </div>
      </div>

    );
  }
}

export default App;
