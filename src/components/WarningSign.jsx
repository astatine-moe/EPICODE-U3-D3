import React from "react";
import Alert from "react-bootstrap/Alert";

class WarningSign extends React.Component {
    render() {
        return <Alert variant="danger">{this.props.text}</Alert>;
    }
}

export default WarningSign;
