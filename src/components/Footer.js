import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Text>Copyright by bigsizeJ {new Date().getFullYear()} @ GitHub</Text>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 5px;
`;

const Text = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
`;

export default Footer;
