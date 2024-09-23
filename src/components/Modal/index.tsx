import styled from "styled-components";
import { Container } from "../../interfaces";

const Modal = styled.div<Container>`
  width: 100vw;
  height: 100vh;

  /* background-color: red; */

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 20px;

  .btn-closed {
    position: fixed;
    top: 10px;
    right: 10px;

    width: 3rem;
    height: 3rem;
    background-color: #dadada;
    border-radius: 100px;

    .content {
      width: 80%;
      height: 90%;
      border: solid red 1px;
    }
  }
`;

export default Modal;
