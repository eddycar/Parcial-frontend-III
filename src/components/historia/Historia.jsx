import React from "react/cjs/react.development";
import Data from "../data.json"

class Historia extends React.Component {

    render() {
        return (
            <h1 className="historia">{Data[this.props.contador].historia}</h1>
        )
    }
}

export default Historia;