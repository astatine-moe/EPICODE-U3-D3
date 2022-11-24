import React from "react";
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

class CommentArea extends React.Component {
    state = {
        comments: [],
        error: "",
        isLoading: true,
    };

    fetchComments = async (bookId) => {
        try {
            let response = await fetch(uri + bookId, opts);

            if (response.ok) {
                let data = await response.json();

                this.setState({
                    ...this.state,
                    comments: data,
                    isLoading: false,
                });
            } else {
                this.setState({
                    ...this.state,
                    error: "Error fetching comments",
                    isLoading: false,
                });
            }
        } catch (e) {
            this.setState({
                ...this.state,
                error: JSON.stringify(e),
                isLoading: false,
            });
        }
    };

    componentDidMount() {
        this.fetchComments(this.props.asin);
    }

    render() {
        return (
            <>
                <hr />
                {this.state.isLoading && <Spinner animation="grow" />}

                {!this.state.isLoading && !this.state.error && (
                    <>
                        <AddComment
                            fetchComments={this.fetchComments}
                            asin={this.props.asin}
                        />
                        <p>Comments</p>
                        <ListGroup variant="flush">
                            {this.state.comments.map((comment, i) => (
                                <SingleComment comment={comment} />
                            ))}
                        </ListGroup>
                    </>
                )}

                {this.state.error && (
                    <Alert variant="danger">{this.state.error}</Alert>
                )}
            </>
        );
    }
}

export default CommentArea;
