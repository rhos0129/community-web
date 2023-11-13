import React from "react";
import Logo from "components/common/Logo";
import DefaultContainer from "components/layout/DefaultContainer";
import SimpleNav from "components/layout/header/SimpleNav";
import SearchBox from "components/common/SearchBox";
import ButtonGroup from "components/common/ButtonGroup";

const Header = () => {
  const navItems = [
    {
      title: "QnA",
      href: "/articles/qna",
    },
    {
      title: "스터디",
      href: "/articles/study",
    },
    {
      title: "일상",
      href: "/articles/life",
    },
  ];

  const buttonGroupItems = [
    {
      text: "로그인",
      href: "/login",
      color: "light",
    },
    {
      text: "회원가입",
      href: "/signup",
      color: "dark",
    },
  ];

  return (
    <header
      id="header"
      role="banner"
      className="sticky-top h-100 bg-white border-bottom border-2 mb-3"
    >
      <DefaultContainer row>
        <Logo />
        <SimpleNav items={navItems} />
        <SearchBox placeholder="전체 검색" width="40%" />
        <ButtonGroup items={buttonGroupItems} rounded />
      </DefaultContainer>
    </header>
  );
};

export default Header;
