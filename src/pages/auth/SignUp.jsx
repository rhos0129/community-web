import AuthPageTitle from "components/auth/AuthPageTitle";
import AuthForm from "components/auth/AuthForm";
import SubLink from "components/auth/SubLink";
import React from "react";
import SimpleLayout from "components/layout/SimpleLayout";

const SignUp = () => {
  const formItems = [
    {
      label: "아이디",
      type: "text",
      placeholder: "4-15자 이내",
    },
    {
      label: "닉네임",
      type: "text",
      placeholder: "알파벳, 한글, 숫자를 포함하여 20자 이하",
    },
    {
      label: "비밀번호",
      type: "password",
      placeholder: "알파벳, 숫자를 포함하여 6자 이상",
    },
    {
      label: "비밀번호 확인",
      type: "password",
      placeholder: "알파벳, 숫자를 포함하여 6자 이상",
    },
  ];

  return (
    <SimpleLayout>
      <AuthPageTitle />
      <AuthForm items={formItems} buttonText="회원가입" />
      <SubLink text="이미 회원이신가요?" to="로그인" href="/login" />
    </SimpleLayout>
  );
};

export default SignUp;
