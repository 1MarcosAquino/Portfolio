import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100dvw;
  height: 80dvh;

  > div {
    justify-content: space-between;

    margin: 0 auto;

    display: flex;
    align-items: center;

    width: var(--width);
    max-width: var(--max-width);
  }

  background: var(--gradient);
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: column;

    row-gap: 0.5rem;

    font-size: large;
  }

  .logo h2 {
    font-size: xx-large;

    background: linear-gradient(to right, var(--secondary), var(--primary));

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: bold;
  }

  .whoIam {
    h1 {
      font-size: xx-large;
      letter-spacing: 0.11em;
    }
    .button {
      padding: 16px;
      background: linear-gradient(to right, var(--primary), var(--secondary));

      color: var(--gray-700);
      font-weight: bold;
      border-radius: 8px;
    }
  }
`;

export default HeaderStyle;
