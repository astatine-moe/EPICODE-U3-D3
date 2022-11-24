import React from "react";
import { ListGroup, Spinner, Button, Alert } from "react-bootstrap";

class SingleComment extends React.Component {
    async deleteComment() {}

    render() {
        return (
            <ListGroup.Item key={this.props.comment._id}>
                <div className="comment">
                    "{this.props.comment.comment}" by{" "}
                    <b>{this.props.comment.author}</b>
                </div>
                <Button variant="danger">Delete</Button>
            </ListGroup.Item>
        );
    }
}

export default SingleComment;
