import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  titulo: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  descripcion: PropTypes.string.isRequired
};

const defaultProps = {
  titulo: 'No me mandaste nada perro, soy el valor por defecto :('
};

class MiComponente extends Component {
  componentWillMount(){
    console.log('I will mount');
  }

  componentDidMount(){
    console.log('I did mount');
  }

  componentWillUpdate(nextProps, nextState){
    console.log(this.props, this.state, nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState){
    console.log(this.props, this.state, prevProps, prevState);
  }

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

MiComponente.propTypes = propTypes;
MiComponente.defaultProps = defaultProps;

export default MiComponente;
