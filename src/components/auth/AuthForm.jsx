import React from "react";
import { Button, Form } from "react-bootstrap";

const AuthForm = ({ items, buttonText }) => {
  return (
    <Form className="w-100">
      {items.map((item, key) => (
        <Form.Group className="my-3" key={key}>
          <Form.Label className="fs-sm">{item.label}</Form.Label>
          <Form.Control type={item.type} placeholder={item.placeholder} />
        </Form.Group>
      ))}
      <Button className="w-100 my-3 bg-bluegray-800 border-bluegray-800">
        {buttonText}
      </Button>
    </Form>
  );
};

export default AuthForm;
