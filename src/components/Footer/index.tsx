import styled from "styled-components";

const Footer = styled.footer`
  color: var(--text);
  font-size: small;
  height: max-content;

  margin-top: 0;

  background: var(--gradient);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  position: relative;
  hr {
    width: var(--width);
    max-width: var(--max-width);

    height: 1px;
    background-color: var(--text);
  }

  a {
    color: var(--text);
    padding-bottom: 2rem;
  }
  a:hover {
    color: var(--secondary);
  }
`;

export default Footer;
