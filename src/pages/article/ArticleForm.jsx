import React from "react";
import Layout from "components/layout/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ArticleForm = () => {
  const modules = {
    toolbar: [
      [{ header: 1 }, { header: 2 }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code", "code-block", "link", "image", "divider"],
    ],
  };

  return (
    <Layout>
      <ReactQuill
        className="w-100 my-5"
        theme="snow"
        modules={modules}
        placeholder="react-quill test"
        style={{height: '50vh'}}
      />
    </Layout>
  );
};

export default ArticleForm;
