import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

const MemeCard = (props) => {
  const naviagte = useNavigate();

  return (
    <div>
      <Card style={{ width: "18rem", margin: "25px" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Button
            onClick={(e) => naviagte(`/edit?url=${props.image}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCard;
