import React from "react";
import { Form, Col } from "react-bootstrap";

let uri = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjc2ZmQ0YmUzZDAwMTU4NDYwMTQiLCJpYXQiOjE2NjgwODU2MTUsImV4cCI6MTY2OTI5NTIxNX0.kb8Xdym3g7w_VaHUzUWEl2EUqrVgOn9acXC5vZbUAiM`;
const opts = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

class AddComment extends React.Component {
    state = {
        email: "",
        text: "",
    };

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

export default AddComment;
