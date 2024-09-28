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

    row-gap: 0.2rem;

    font-size: large;
  }

  .logo {
    margin-top: 1rem;
    h2 {
      text-shadow: 2px 2px 5px var(--background-2);
      font-size: 1.2em;
    }
    p {
      font-size: 0.9em;
      color: var(--background-2);
      font-weight: 500;
      text-shadow: 1px 1px 5px var(--text);
    }
  }

  /* background: linear-gradient(to right, var(--secondary), var(--primary));

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: bold; */

  position: relative;

  .whoIam {
    margin-top: 7rem;
    h1 {
      font-size: 2.5em;
      letter-spacing: 0.11em;
      font-weight: 500;
      text-shadow: 2px 2px 5px var(--background-2);
    }
  }

  .button {
    padding: 0.5rem 2.5rem;
    background: linear-gradient(to right, var(--primary), var(--secondary));

    color: var(--gray-700);
    font-weight: bold;
    border-radius: 8px;

    position: absolute;
    top: 65%;
    left: 24%;
  }
`;

export default HeaderStyle;
