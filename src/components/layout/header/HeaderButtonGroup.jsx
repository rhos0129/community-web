import React from "react";
import { Button, Stack, NavDropdown } from "react-bootstrap";

const HeaderButtonGroup = ({ items, rounded }) => {
  const isLogin = window.localStorage.getItem("isLogin");

  const clickLogoutButton = () => {
    window.localStorage.removeItem("isLogin");
  };

  return (
    <Stack direction="horizontal" gap={1}>
      {isLogin ? (
        <NavDropdown title="닉네임" menuVariant="white">
          <NavDropdown.Item href="/profile">프로필</NavDropdown.Item>
          <NavDropdown.Item href="/" onClick={clickLogoutButton}>
            로그아웃
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        items.map((item, key) => (
          <Button
            key={key}
            className={
              "fs-sm " +
              (item.color === "light" &&
                " border-bluegray-900 bg-white text-black ") +
              (item.color === "dark" &&
                " bg-bluegray-900 border-bluegray-900 ") +
              (rounded && " rounded-5")
            }
            href={item.href}
          >
            {item.text}
          </Button>
        ))
      )}
    </Stack>
  );
};

export default HeaderButtonGroup;
