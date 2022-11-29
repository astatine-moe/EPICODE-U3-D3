import React from "react";
import Alert from "react-bootstrap/Alert";

const WarningSign = (props) => {
    return <Alert variant="danger">{props.text}</Alert>;
};

export default WarningSign;
