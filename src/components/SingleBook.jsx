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
                              "box-shadow": "0 0 50px 15px #28A745",
                          }
                        : {}
                }
                onClick={(e) => {
                    this.setState({
                        selected: !this.state.selected,
                    });
                }}
                bg="dark"
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
