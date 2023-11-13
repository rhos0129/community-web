import React from "react";
import AuthPageTitle from "components/auth/AuthPageTitle";
import AuthForm from "components/auth/AuthForm";
import SubLink from "components/auth/SubLink";
import SimpleLayout from "components/layout/SimpleLayout";

const Login = () => {
  const formItems = [
    {
      label: "아이디",
      type: "text",
    },
    {
      label: "비밀번호",
      type: "password",
    },
  ];

  return (
    <SimpleLayout>
      <AuthPageTitle />
      <AuthForm items={formItems} buttonText="로그인" />
      <SubLink text="아직 회원이 아니신가요?" to="회원가입" href="/signup" />
    </SimpleLayout>
  );
};

export default Login;
