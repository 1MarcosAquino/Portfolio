import styled from "styled-components";

const StyleForm = styled.form`
  background: var(--gradient-2);
  /*linear-gradient(to right, #4169e1, #00008b);*/
  padding: 20px;
  border-radius: 10px;

  height: 350px;
  --mwidth: 300px;
  width: var(--mwidth);

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  input,
  textarea {
    width: 100%;
    padding: 10px 0;
    text-indent: 1rem;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background: #222;
    color: var(--text);
    resize: none;
  }

  textarea {
    height: 150px;
  }
  button {
    background: #222;
    font-weight: 700;
    color: var(--text);
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    max-width: calc(var(--mwidth) / 2);
  }

  /* 
  height: 500px;
  width: 400px;

  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  background: linear-gradient(to left, red, blue);

  input,
  button,
  textarea {
    border-radius: inherit;
    background-color: #0f162f;
    color: var(--gray-100);
    max-width: 80%;
    width: 80%;
  }
#bfd6f6,#8dbdff,#64a1f4,#4b91f1,#3c7dd9
  button {
    font-weight: bold;
    width: 100px;
    height: 40px;
  } */
`;

export default StyleForm;
