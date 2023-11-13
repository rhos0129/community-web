import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Form, Stack } from "react-bootstrap";

const ArticleForm = ({ title, content }) => {
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code", "code-block", "link", "image", "divider"],
    ],
  };

  return (
    <Form className="w-100 mt-4">
      <Form.Group className="mb-3">
        <Form.Label className="fs-sm">제목</Form.Label>
        <Form.Control type="text" placeholder="제목 입력" value={title} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fs-sm">본문</Form.Label>
        <ReactQuill
          className="w-100 "
          theme="snow"
          modules={modules}
          placeholder="내용 입력"
          value={content}
        />
      </Form.Group>
      <Stack direction="horizontal" className="" gap={1}>
        <Button className="bg-white text-bluegray-800 border-bluegray-800 ms-auto px-4">
          취소
        </Button>
        <Button className="bg-bluegray-800 border-bluegray-800 px-4">
          등록
        </Button>
      </Stack>
    </Form>
  );
};

export default ArticleForm;
