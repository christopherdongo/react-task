import React from "react";
import {  styled } from "@nextui-org/react"
import { Content } from "./Content";

interface Props {
  children: JSX.Element;
}

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
    css={{
      maxW:'100%',
    }}
  >
    {children}
    <Content />
  </Box>
  );
};
