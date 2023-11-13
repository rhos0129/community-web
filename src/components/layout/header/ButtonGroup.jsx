import React from "react";
import { Button, Stack } from "react-bootstrap";

const ButtonGroup = ({ items, rounded }) => {
  return (
    <Stack direction="horizontal" gap={1}>
      {items.map((item, key) => (
        <Button
          key={key}
          className={
            "fs-sm " +
            (item.color === "light" &&
              " border-bluegray-900 bg-white text-black ") +
            (item.color === "dark" && " bg-bluegray-900 border-bluegray-900 ") +
            (rounded && " rounded-5")
          }
          href={item.href}
        >
          {item.text}
        </Button>
      ))}
    </Stack>
  );
};

export default ButtonGroup;
