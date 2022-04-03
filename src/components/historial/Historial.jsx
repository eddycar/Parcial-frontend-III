import React from 'react'

class Historial extends React.Component {

    render() {
        return (
            <div className='recordatorio'>
                <h3>Selección anterior: {this.props.seleccionAnterior} </h3>
                <h4>Historial de opciones</h4>
                <ul>{this.props.historial.map((seleccion, i) => {
                    return <li key={i}>{seleccion}</li>
                })}</ul>
            </div>
        )
    }
}

export default Historial;