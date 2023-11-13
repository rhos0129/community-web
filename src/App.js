import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import SignUp from "pages/auth/SignUp";
import Login from "pages/auth/Login";
import Profile from "pages/mypage/Profile";
import ArticleView from "pages/article/ArticleView";
import ArticleEdit from "pages/article/ArticleEdit";
import NotFound from "pages/NotFound";
import ArticleRegist from "pages/article/ArticleRegist";
import ArticleSearch from "pages/article/ArticleSearch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:category" element={<ArticleSearch />} />
        <Route path="/article/:no" element={<ArticleView />} />
        <Route path="/article/new" element={<ArticleRegist />} />
        <Route path="/article/:no/edit" element={<ArticleEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
