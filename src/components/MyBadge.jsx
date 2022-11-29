import React from "react";
import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
    return <Badge variant={props.variant}>{props.text}</Badge>;
};

export default MyBadge;
