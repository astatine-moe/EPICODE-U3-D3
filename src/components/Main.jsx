import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import BookList from "./BookList";
import books from "../horror.json";

const Main = (props) => {
    const [selected, setSelected] = useState(null);

    return (
        <Row>
            <Col>
                <BookList
                    selected={selected}
                    books={books}
                    setSelected={setSelected}
                />
            </Col>
            {selected && (
                <Col>
                    <CommentArea book={selected} />
                </Col>
            )}
        </Row>
    );
};

export default Main;
