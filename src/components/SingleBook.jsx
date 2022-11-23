import React from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends React.Component {
    state = {
        selected: false,
    };
    render() {
        return (
            <Card
                style={
                    this.state.selected
                        ? {
                              "box-shadow": "0 0 50px 15px green",
                          }
                        : {}
                }
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
