import React, { useState } from "react";
import { ListGroup, Spinner, Button } from "react-bootstrap";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjc2ZmQ0YmUzZDAwMTU4NDYwMTQiLCJpYXQiOjE2NjkyOTc4NDMsImV4cCI6MTY3MDUwNzQ0M30.YX8IkylxvRr8RSZhmVAHJyyJ3Onl4Koa4jmZbQGKrHg`;
const opts = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

const SingleComment = (props) => {
    const [deleted, setDeleted] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const deleteComment = async (_id) => {
        setDeleting(true);
        try {
            let response = await fetch(uri + _id, {
                ...opts,
                method: "DELETE",
            });

            if (response.ok) {
                setDeleted(true);
                setDeleting(false);
            } else {
                console.log("error deleting comment");
            }
        } catch (e) {
            console.log("error deleting comment");
            console.error(e);
        }
    };

    return (
        <>
            {!deleted && (
                <ListGroup.Item key={props.comment._id}>
                    <div className="comment">
                        {deleting && <Spinner variant="grow" />}"
                        {props.comment.comment}" by{" "}
                        <b>{props.comment.author}</b>
                    </div>
                    <Button
                        variant="danger"
                        onClick={() => deleteComment(props.comment._id)}
                    >
                        Delete
                    </Button>
                </ListGroup.Item>
            )}
        </>
    );
};

export default SingleComment;
