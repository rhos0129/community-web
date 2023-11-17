import React from "react";
import BasicLayout from "components/layout/BasicLayout";
import CommentForm from "components/article/CommentForm";
import AriticleView from "components/article/AriticleView";

const ArticleDetail = () => {
  const articleInfo = {
    writer: "작성자",
    createDttm: "2023.01.05",
    viewCount: 11,
    title: "제목이오",
    content:
      "<p>본문내용이오</p> <p>본문내용이오</p> <p>본문내용이오</p> <p>엄청 긴 본문 내용이오 엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오엄청 긴 본문 내용이오</p>",
  };

  return (
    <BasicLayout>
      <hr className="w-100" />
      <AriticleView
        writer={articleInfo.writer}
        createDttm={articleInfo.createDttm}
        viewCount={articleInfo.viewCount}
        title={articleInfo.title}
        content={articleInfo.content}
      />
      <hr className="w-100" />
      <div className="w-100 mb-5">5개의 댓글</div>
      <div className="w-100 border p-4 rounded-4">
        <CommentForm />
      </div>
    </BasicLayout>
  );
};

export default ArticleDetail;
