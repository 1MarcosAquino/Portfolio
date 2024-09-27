import styled from "styled-components";

const ModalStyle = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 20px;

  .btn-closed {
    position: fixed;
    top: 40px;
    right: 30px;

    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--background);
    border-radius: 100px;

    .content {
      width: 80%;
      height: 90%;
      border: solid red 1px;
    }
  }
`;

export default ModalStyle;
