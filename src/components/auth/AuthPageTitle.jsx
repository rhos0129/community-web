import Logo from "components/common/Logo";
import React from "react";
import { Stack } from "react-bootstrap";

const AuthPageTitle = () => {
  return (
    <Stack gap={1} className="w-100 text-center py-4">
      <Logo center onlyLogo />
      <h2 className="fw-bolder fs-4 text-uppercase">
        com에 오신것을 환영합니다.
      </h2>
      <span className="fs-sm text-uppercase">
        com은 공부 목적으로 만들어보는 간단한 개발자 커뮤니티입니다.
      </span>
    </Stack>
  );
};

export default AuthPageTitle;
