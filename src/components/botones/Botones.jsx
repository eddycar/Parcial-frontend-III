import React, { Component } from 'react'
import Data from '../data.json'

class Botones extends Component {

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" onClick={this.props.actualizarA}>A</button>
                    <h2>{Data[this.props.contador].opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" onClick={this.props.actualizarB}>B</button>
                    <h2 >{Data[this.props.contador].opciones.b}</h2>
                </div>

            </div>
        )
    }
}

export default Botones;