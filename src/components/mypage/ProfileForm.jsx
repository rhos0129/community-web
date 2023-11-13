import React from "react";
import { Button, Form } from "react-bootstrap";

const ProfileForm = ({ items }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-end">
        <div className="w-75 me-5">
          {items.map((item, key) => (
            <Form.Group className="my-2" key={key}>
              <Form.Label className="fs-sm">{item.label}</Form.Label>
              <Form.Control type={item.type} value={item.value} />
            </Form.Group>
          ))}
        </div>
        <Button className="w-25 px-4 bg-bluegray-800 border-bluegray-800">
          저장
        </Button>
      </div>
    </>
  );
};

export default ProfileForm;
