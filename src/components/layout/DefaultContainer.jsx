import React from "react";
import { Col, Container } from "react-bootstrap";

const DefaultContainer = ({ children, row, responsive }) => {
  return (
    <Container fluid={"lg"} className="d-flex align-items-center">
      <Col className={"d-flex justify-content-start"}>
        {children.slice(0, 1)}
      </Col>
      <Col
        className={
          "d-flex" +
          (row
            ? " justify-content-between "
            : " flex-column align-items-center ") +
          (responsive && "col-12")
        }
        lg={8}
      >
        {children.slice(1, -1)}
      </Col>
      <Col className={"d-flex justify-content-end"}>{children.slice(-1)}</Col>
    </Container>
  );
};

export default DefaultContainer;
