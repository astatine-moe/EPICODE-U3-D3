import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

class BookList extends React.Component {
    state = {
        search: "",
    };

    render() {
        return (
            <>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    name="search"
                    onChange={(e) => {
                        this.setState({
                            search: e.target.value,
                        });
                    }}
                />
                {/* Show 6 books when no book selected, 4 when book is selected */}
                <Row xs={2} md={this.props.selected ? 4 : 6} className="g-4">
                    {this.props.books
                        .slice(0, 20)
                        .filter((book) =>
                            book.title
                                .toLowerCase()
                                .includes(this.state.search.toLowerCase())
                        )
                        .map((book, i) => (
                            <Col key={book.asin}>
                                <SingleBook
                                    book={book}
                                    setSelected={this.props.setSelected}
                                    selected={this.props.selected === book.asin}
                                />
                            </Col>
                        ))}
                </Row>
            </>
        );
    }
}

export default BookList;
