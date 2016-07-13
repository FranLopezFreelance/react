import React, {PropTypes, Component } from 'react';

import ReactDOM from "react-dom";

let content = document.getElementById('content');

  class SimpleComponent extends Component {

    constructor(props){
      super(props);
      this.state = {
        numero: 0,
        mostrar: true 
      };
    }

    sumar(){
      this.setState({numero: this.state.numero + 1});
    }

    restar(){
      this.setState({numero: this.state.numero - 1});
    }

    montar(){
      this.setState({mostrar: true});
    }

    desmontar(){
      this.setState({mostrar: false});
    }

    render(){
      return (
        <div>
           { this.state.mostrar && <MiLabel numero={ this.state.numero } /> }
          { this.state.mostrar && <MiBoton alterador={this.sumar.bind(this)} accion={"Sumar"} /> }
          { this.state.mostrar && <MiBoton alterador={this.restar.bind(this)} accion={"Restar"} /> }
          <MiBoton alterador={this.montar.bind(this)} accion={"Mostrar"} />
          { this.state.mostrar && <MiBoton alterador={this.desmontar.bind(this)} accion={"Ocultar"} /> }
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
          <button onClick={this.props.alterador}>{ this.props.accion }</button>
      );
    }
  }

  class Texto extends Component {
    render(){
      return (
          <h1>Texto</h1>
      );
    }
  }

ReactDOM.render(<SimpleComponent/>, content);

// setTimeout(function(){
//   ReactDOM.unmountComponentAtNode(content)
// }, '3000');