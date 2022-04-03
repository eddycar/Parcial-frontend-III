import React from "react";
import Botones from "./components/botones/Botones";
import Historia from "./components/historia/Historia";
import Historial from "./components/historial/Historial";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
      seleccionAnterior: "",
      historial: [],
    }
  }

  componentWillMount() {
    alert("Bienvenidos a tu propia aventura!")
  }

  reiniciar = () => {
    this.setState({
      contador: 0,
      seleccionAnterior: "",
      historial: [],
    })
    alert("Fin de la historia!")
  }

  actualizarHistoriaOpcionA = () => {
    if(this.state.historial.length < 4){
      let incremento = 0;
      this.state.seleccionAnterior === "" || this.state.seleccionAnterior === "B"? incremento = 1 : incremento = 2;
      this.setState({
        contador: this.state.contador + incremento,
        seleccionAnterior: "A",
        historial: [...this.state.historial, "A"]
      })
    }
    else {
      this.reiniciar();
    }
  }

  actualizarHistoriaOpcionB = () => {
    if(this.state.historial.length < 4){
    let incremento = 0;
    this.state.seleccionAnterior === "" || this.state.seleccionAnterior === "B" ? incremento = 2 : incremento = 3;
    this.setState({
      contador: this.state.contador + incremento,
      seleccionAnterior: "B",
      historial: [...this.state.historial, "B"]
    })}
    else{
      this.reiniciar();
    }
  }

  render() {
    return (
      <div className='layout'>
        <Historia contador={this.state.contador} />
        <Botones actualizarA={this.actualizarHistoriaOpcionA} actualizarB={this.actualizarHistoriaOpcionB} contador={this.state.contador} />
        <Historial historial={this.state.historial} seleccionAnterior={this.state.seleccionAnterior} />
      </div>
    );
  }
}

export default App;
