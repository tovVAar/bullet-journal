import React, { Component } from 'react';

class MiComponente extends Component {

  render(){
    const {titulo, descripcion, onClick} = this.props;

    return (
      <div>
        <h2>
          Suena como un crimen lo que tu me has hecho...
        </h2>
        <h3>
          {titulo}
        </h3>
        <div onClick = {onClick}>
          <h4>
            {descripcion}
          </h4>
        </div>
      </div>
    );
  }

}

export default MiComponente;
