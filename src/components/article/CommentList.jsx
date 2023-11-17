import React from "react";
import CommentView from "./CommentView";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ items }) => {
  return (
    <ListGroup className="w-100" as="ul">
      {items.map((item, key, array) => (
        <ListGroup.Item
          key={key}
          as="li"
          className={
            "py-4 px-0 border-0 " + (key + 1 !== array.length && " border-bottom")
          }
        >
          <CommentView
            writer={item.writer}
            createDttm={item.createDttm}
            content={item.content}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
