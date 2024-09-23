import styled from "styled-components";
import { Container } from "../../interfaces";

const Contact = styled.div<Container>`
  height: 70dvh;
  max-width: 70%;

  flex-direction: row;
  flex-wrap: wrap;
  /* height: calc(min-content * 3); */

  position: relative;

  display: flex;
  column-gap: 100px;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  a,
  button {
    background-color: transparent;
    padding: 2px 5px;

    border: 1px darkolivegreen solid;
    width: 60px;
    :first-child {
      width: inherit;
    }
  }

  .background {
    display: flex;

    position: absolute;
    top: 35%;
    left: 52%;
    /* width: 100%; */
    height: fit-content;

    justify-content: center;
    align-items: center;

    font-size: 5rem;
    font-weight: 600;
    color: rgba(117, 117, 117, 0.288);
    z-index: 0;
  }
`;

export default Contact;
