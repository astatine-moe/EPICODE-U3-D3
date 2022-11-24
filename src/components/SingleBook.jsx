import React from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

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
                              boxShadow: "0 0 50px 15px #28A745",
                          }
                        : {}
                }
                bg="dark"
            >
                <Card.Img
                    variant="top"
                    src={this.props.book.img}
                    onClick={(e) => {
                        this.setState({
                            selected: !this.state.selected,
                        });
                    }}
                />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    {this.state.selected && (
                        <CommentArea asin={this.props.book.asin} />
                    )}
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
