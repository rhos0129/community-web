import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import { Stack } from "react-bootstrap";
import Logo from "components/common/Logo";
import Sns from "./Sns";
import DefaultContainer from "../DefaultContainer";
import Info from "./Info";

const Footer = () => {

  const infoTexts = [
    '공부 목적으로 만들어보는 간단한 개발자 커뮤니티',
    '기술스택 : react, bootstrap, spring, jpa',
    '© 2023 (주)Com, Inc. All rights reserved.'
  ]

  const snsItems = {
    fe: [
      {
        label: "프론트 깃허브",
        href: "/fe-github",
        icon: <BsGithub size="18px" />,
      },
      {
        label: "프론트 노션",
        href: "/fe-notion",
        icon: <SiNotion size="18px" />,
      },
    ],
    be: [
      {
        label: "백엔드 깃허브",
        href: "/be-github",
        icon: <BsGithub size="18px" />,
      },
      {
        label: "프론트 노션",
        href: "/be-notion",
        icon: <SiNotion size="18px" />,
      },
    ],
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-white border-top border-2 mt-5 py-3"
    >
      <DefaultContainer>
        <Logo />
        <Info texts={infoTexts}/>
        <Stack direction="horizontal" gap={1}>
          <Sns group="fe" items={snsItems.fe} />
          <Sns group="be" items={snsItems.be} />
        </Stack>
      </DefaultContainer>
    </footer>
  );
};

export default Footer;
