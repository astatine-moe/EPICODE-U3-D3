import React from "react";
import { ListGroup, Spinner, Button, Alert } from "react-bootstrap";

const uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjc2ZmQ0YmUzZDAwMTU4NDYwMTQiLCJpYXQiOjE2NjgwODU2MTUsImV4cCI6MTY2OTI5NTIxNX0.kb8Xdym3g7w_VaHUzUWEl2EUqrVgOn9acXC5vZbUAiM`;
const opts = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};
class SingleComment extends React.Component {
    state = {
        deleted: false,
        deleting: false,
    };

    async deleteComment(_id) {
        this.setState({
            ...this.state,
            deleting: true,
        });
        try {
            let response = await fetch(uri + _id, {
                ...opts,
                method: "DELETE",
            });

            if (response.ok) {
                this.setState({
                    deleted: true,
                    deleting: false,
                });
            } else {
                console.log("error deleting comment");
            }
        } catch (e) {
            console.log("error deleting comment");
            console.error(e);
        }
    }

    render() {
        return (
            <>
                {!this.state.deleted && (
                    <ListGroup.Item key={this.props.comment._id}>
                        <div className="comment">
                            {this.state.deleting && <Spinner variant="grow" />}"
                            {this.props.comment.comment}" by{" "}
                            <b>{this.props.comment.author}</b>
                        </div>
                        <Button
                            variant="danger"
                            onClick={() =>
                                this.deleteComment(this.props.comment._id)
                            }
                        >
                            Delete
                        </Button>
                    </ListGroup.Item>
                )}
            </>
        );
    }
}

export default SingleComment;
