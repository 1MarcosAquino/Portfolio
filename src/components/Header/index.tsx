import styled from "styled-components";
import { Container } from "../../interfaces";

const Header = styled.div<Container>`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 150px;
  padding-top: 1.5rem;
  background-color: var(--gray-700);

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: column;

    row-gap: 0.5rem;
  }

  .logo h2 {
    font-size: 1.8rem;
    background: linear-gradient(
      to right,
      var(--secondary-color),
      var(--primary-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: bold;
  }

  .logo p {
    font-size: 0.9rem;
  }

  hr {
    height: 2px;
    border: none;
    background: linear-gradient(
      to right,
      var(--secondary-color),
      var(--primary-color)
    );
  }

  @media (min-width: 535px) {
    height: 100px;
    padding-bottom: 3rem;
    div {
      justify-content: space-between;
    }
    hr {
      margin-top: 0.8rem;
    }
  }
`;

export default Header;
