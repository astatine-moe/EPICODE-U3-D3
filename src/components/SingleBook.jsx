import React from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
    state = {
        selected: false,
    };
    render() {
        return (
            <Card
                style={this.state.selected ? { border: "3px solid green" } : {}}
                onClick={(e) => {
                    this.setState({
                        selected: !this.state.selected,
                    });
                }}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>
                        {this.state.selected ? "Selected: " : ""}
                        {this.props.book.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
