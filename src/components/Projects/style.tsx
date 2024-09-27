import styled from "styled-components";

const ProjectStyle = styled.div`
  --gap: 16px;
  --cardMaxWidth: calc((var(--max-width) - var(--gap) * 3) / 3);
  --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;

  margin: 2rem 0 6rem 0;

  .card {
    position: relative;

    width: 100%;
    max-width: var(--cardMaxWidth);
    height: var(--cardHeigth);

    padding: 0.5rem;

    border-radius: 16px;
    border: 4px solid var(--background);
    box-shadow: 0 4px 8px var(--gray-600);
  }

  .name {
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 0.6rem;
    text-align: right;
  }

  .description {
    height: 64%;
    text-align: center;
    font-size: 0.9em;
    overflow-y: auto;
    line-height: 1.5;
  }

  .languages {
    position: absolute;
    bottom: 0px;
    right: 5px;
  }

  .htmlUrl_homepage {
    position: absolute;
    bottom: 0;
  }

  button {
    background: transparent;
  }

  .language:hover,
  button:hover,
  a:hover {
    color: var(--background);
  }

  /*
  .homepage,
  .html_url {
    display: inline-block;
    padding: 4px 8px;

    color: var(--text);
    text-decoration: none;
    border-radius: 4px;

    transition: linear 0.3s;

    button,
    a {
      background-color: transparent;
    }
  }

  .contact {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    column-gap: 1.2rem;
    row-gap: 0.5rem;
  }
  .contact .background {
    display: none;
  }

  .contact .button {
    padding: 0.8rem 0.5rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1em;
    min-width: 210px;

    background-color: transparent;
  }
  .contact .button:hover {
    color: var(--primary-color);
  }
  .contact .button img {
    width: 1rem;
  }

  .contact .tooltiptext {
    width: fit-content;
    padding: 0.25rem 0.5rem;
  }
  .contact img {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: 535px) {
    body {
      padding-top: 7rem;
    }
    header div {
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
    }

    .language {
      bottom: 0;
      right: 10px;
    }

    .html_url {
      bottom: 0;
    }

    .homepage {
      bottom: 0;
    }
  } */
`;

export default ProjectStyle;
