import React from "react";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import BookList from "./BookList";
import books from "../horror.json";
class Main extends React.Component {
    state = {
        selected: null,
    };

    setSelected = (asin) => {
        this.setState({
            selected: asin,
        });
    };

    render() {
        return (
            <Row>
                <Col>
                    <BookList
                        selected={this.state.selected}
                        books={books}
                        setSelected={this.setSelected}
                    />
                </Col>
                {this.state.selected && (
                    <Col>
                        <CommentArea book={this.state.selected} />
                    </Col>
                )}
            </Row>
        );
    }
}

export default Main;
