import styled from "styled-components";

const StyleContact = styled.div`
  width: 100%;
  height: 70dvh;
  background-color: var(--secondary);
  background: var(--gradient);
  border-top-right-radius: 200px;
  border-top-left-radius: 200px;

  > div {
    width: var(--width);
    max-width: var(--max-width);
    height: 100%;
    margin: 0 auto;
    padding-top: 2rem;
    padding-bottom: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    gap: 16px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "title title title"
      "subtitle subtitle form"
      "linkedin linkedin form"
      "fone fone form"
      "email email form"
      "github github form";

    h2 {
      grid-area: title;
      text-align: center;
      font-size: 3em;
    }

    form {
      grid-area: form;
      justify-self: end;
    }

    .subtitle {
      grid-area: subtitle;
      display: flex;
      flex-direction: column;
      row-gap: 1.2rem;
      height: 100px;
    }

    .subtitle h3 {
      font-size: 1.5em;
      width: fit-content;
    }
    .subtitle p {
      font-size: small;
      text-align: end;
      width: 330px;
      color: var(--gray-100);
    }
    .linkedin {
      grid-area: linkedin;
    }
    .fone {
      grid-area: fone;
    }
    .email {
      grid-area: email;
    }
    .github {
      grid-area: github;
    }

    .button {
      font-size: 1em;
      justify-self: start;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;
    }

    img {
      width: 3rem;
    }
  }
`;

export default StyleContact;
