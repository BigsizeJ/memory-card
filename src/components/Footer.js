import styled from "styled-components";
import { Theme } from "./util/Theme";
import logo from "../asset/github.png";

const Footer = () => {
  return (
    <Wrapper>
      <Text>
        Copyright by bigsizeJ {new Date().getFullYear()} @{" "}
        <Logo src={logo}></Logo>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 5px;
  position: absolute;
  bottom: 0px;
  background-color: ${Theme.headerColor};
`;

const Text = styled.p`
  display: flex;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: whitesmoke;
  justify-content: center;
  gap: 5px;
`;

const Logo = styled.img`
  width: 1.4rem;
`;

export default Footer;
