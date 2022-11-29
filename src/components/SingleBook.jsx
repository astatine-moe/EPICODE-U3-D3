import React from "react";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
    return (
        <Card
            style={
                props.selected
                    ? {
                          boxShadow: "0 0 50px 15px #28A745",
                      }
                    : {}
            }
            bg="dark"
            className="mb-3 book"
        >
            <Card.Img
                variant="top"
                src={props.book.img}
                onClick={(e) => {
                    props.setSelected(props.book.asin);
                }}
            />
        </Card>
    );
};

export default SingleBook;
