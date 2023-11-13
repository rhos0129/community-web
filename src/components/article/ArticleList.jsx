import React from "react";
import { ListGroup, Stack } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { LiaCommentDots } from "react-icons/lia";

const ArticleList = ({ items }) => {
  return (
    <>
      <ListGroup className="w-100" as="ul">
        {items.map((item, key) => (
          <ListGroup.Item
            className="border-start-0 border-end-0 rounded-0"
            action
            as="li"
            key={key}
          >
            <h5 className="w-75 fw-bolder text-truncate fs-6">
              <a
                className="link-bluegray-800 link-underline-opacity-0 link-opacity-50-hover"
                href={item.href}
              >
                {item.title}
              </a>
            </h5>
            <div className="d-flex justify-content-between align-items-start text-muted fs-sm">
              <span className="w-75">
                {item.writer} | {item.createDttm}
              </span>
              <Stack direction="horizontal" gap={1}>
                <span>
                  <BsEye />
                  {item.viewCount}
                </span>
                <span>
                  <LiaCommentDots />
                  {item.commentCount}
                </span>
              </Stack>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ArticleList;
