import React, {PropTypes, Component } from 'react';

import ReactDOM from "react-dom";

let content = document.getElementById('content');

  class SimpleComponent extends Component {

    constructor(props){
      super(props);
      this.state = {
        numero: 0, 
      };
    }

    sumar(){
      this.setState({numero: this.state.numero + 1});
    }

    render(){
      return (
        <div>
          <MiLabel numero={ this.state.numero } />
          <MiBoton incrementador={this.sumar.bind(this)} />
        </div>       
      );
    }
  }

  class MiLabel extends Component {
    render(){
      return (
          <h1>El número es: {this.props.numero}</h1>
      );
    }
  }

  class MiBoton extends Component {
    render(){
      return (
          <button onClick={this.props.incrementador}>+</button>
      );
    }
  }

ReactDOM.render(<SimpleComponent/>, content);