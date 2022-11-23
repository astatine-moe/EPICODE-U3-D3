import React from "react";
import Badge from "react-bootstrap/Badge";

class MyBadge extends React.Component {
    render() {
        return <Badge variant={this.props.variant}>{this.props.text}</Badge>;
    }
}

export default MyBadge;
