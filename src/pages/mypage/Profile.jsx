import BasicLayout from "components/layout/BasicLayout";
import ProfileForm from "components/mypage/ProfileForm";
import ProfileSection from "components/mypage/ProfileSection";
import ProfileWithdraw from "components/mypage/ProfileWithdraw";
import React from "react";

const Profile = () => {
  const profileInfoFormItems = [
    {
      label: "아이디",
      type: "text",
      value: "기존아이디(disabled)",
    },
    {
      label: "닉네임",
      type: "text",
      value: "기존닉네임",
    },
  ];
  const passwordFormItems = [
    {
      label: "현재 비밀번호",
      type: "password",
    },
    {
      label: "새 비밀번호",
      type: "password",
    },
    {
      label: "새 비밀번호 재입력",
      type: "password",
    },
  ];
  return (
    <BasicLayout>
      <ProfileSection title="회원정보">
        <ProfileForm items={profileInfoFormItems} />
      </ProfileSection>
      <hr className="w-100" />
      <ProfileSection title="비밀번호 변경">
        <ProfileForm items={passwordFormItems} />
      </ProfileSection>
      <hr className="w-100" />
      <ProfileSection title="계정삭제">
        <ProfileWithdraw />
      </ProfileSection>
    </BasicLayout>
  );
};

export default Profile;
