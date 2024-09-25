import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonOrLinkProps =
  | ({ as?: "button" } & ButtonProps)
  | ({ as?: "a" } & AnchorProps);

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({
  as = "button",
  children,
  ...props
}) => {
  const Component = as === "a" ? StyledLink : StyledButton;

  return <Component {...props}>{children}</Component>;
};

export default ButtonOrLink;
