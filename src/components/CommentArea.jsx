import React, { useState, useEffect, useRef } from "react";
import { ListGroup, Spinner, Button, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjc2ZmQ0YmUzZDAwMTU4NDYwMTQiLCJpYXQiOjE2NjkyOTc4NDMsImV4cCI6MTY3MDUwNzQ0M30.YX8IkylxvRr8RSZhmVAHJyyJ3Onl4Koa4jmZbQGKrHg`;
const opts = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const CommentArea = (props) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const prevBook = usePrevious(props.book);

    const fetchComments = async () => {
        setIsLoading(true);
        if (props.book) {
            try {
                let response = await fetch(uri + props.book, opts);

                if (response.ok) {
                    let data = await response.json();

                    setIsLoading(false);
                    setComments(data);
                } else {
                    setIsLoading(false);
                    setError("Error fetching comments");
                }
            } catch (e) {
                setIsLoading(false);
                setError(JSON.stringify(e));
            }
        } else {
            setIsLoading(false);
            setError("No book selected");
        }
    };

    useEffect(() => {
        //componentDidMount
        fetchComments();
    }, []);

    useEffect(() => {
        //componentDidUpdate
        if (prevBook !== props.book) {
            fetchComments();
        }
    });

    return (
        <>
            <hr />
            {isLoading && <Spinner animation="grow" />}

            {!isLoading && !error && (
                <>
                    <AddComment
                        fetchComments={fetchComments}
                        asin={props.book}
                    />
                    <p>Comments</p>
                    <ListGroup variant="flush">
                        {comments.length ? (
                            comments.map((comment, i) => (
                                <SingleComment comment={comment} />
                            ))
                        ) : (
                            <p>No comments found</p>
                        )}
                    </ListGroup>
                </>
            )}

            {error && <Alert variant="danger">{error}</Alert>}
        </>
    );
};

export default CommentArea;
