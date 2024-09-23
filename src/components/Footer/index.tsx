import styled from "styled-components";
import { Container } from "../../interfaces";

const Footer = styled.footer<Container>`
  color: var(--gray-100);
  font-size: small;
  height: 3.25rem;

  text-align: center;
  margin-top: 1.8rem;

  padding-top: 1.8rem;
  a {
    display: block;
    margin-top: 1rem;
    padding-bottom: 2rem;
    color: var(--gray-100);
  }
  a:hover {
    color: var(--primary-color);
  }
`;

export default Footer;
