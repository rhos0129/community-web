import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import ReactQuill from "react-quill";

const CommentForm = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code", "code-block", "link", "image", "divider"],
    ],
  };
  return (
    <Form className="w-100 mt-4">
      <ReactQuill
        className="w-100 mb-3 comment"
        theme="snow"
        modules={modules}
        placeholder="댓글 입력"
      />
      <Stack direction="horizontal" className="" gap={1}>
        <Button className="bg-white text-bluegray-800 border-bluegray-800 ms-auto px-2">
          취소
        </Button>
        <Button className="bg-bluegray-800 border-bluegray-800 px-4">
          댓글 쓰기
        </Button>
      </Stack>
    </Form>
  );
};

export default CommentForm;
