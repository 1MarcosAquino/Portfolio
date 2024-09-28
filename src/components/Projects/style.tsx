import styled from "styled-components";

const ProjectStyle = styled.section`
  --gap: 16px;
  --cardMaxWidth: calc((var(--max-width) - var(--gap) * 3) / 3);
  --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  justify-content: center;

  .card {
    position: relative;

    width: 100%;
    max-width: var(--cardMaxWidth);
    height: var(--cardHeigth);

    padding: 0.5rem;

    border-radius: 16px;
    border: 4px solid var(--background-2);
    box-shadow: 0 4px 8px var(--gray-600);
  }
  .card p {
    text-shadow: 2px 2px 3px var(--background);
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
`;

export default ProjectStyle;
