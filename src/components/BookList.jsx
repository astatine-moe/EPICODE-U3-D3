import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

const BookList = (props) => {
    const [search, setSearch] = useState("");
    return (
        <>
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            {/* Show 6 books when no book selected, 4 when book is selected */}
            <Row xs={2} md={props.selected ? 4 : 6} className="g-4">
                {props.books
                    .slice(0, 20)
                    .filter((book) =>
                        book.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((book, i) => (
                        <Col key={book.asin}>
                            <SingleBook
                                book={book}
                                setSelected={props.setSelected}
                                selected={props.selected === book.asin}
                            />
                        </Col>
                    ))}
            </Row>
        </>
    );
};

export default BookList;
