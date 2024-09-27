import styled from "styled-components";

const ExpertienceStyle = styled.section`
  display: flex;
  gap: 1.1rem;

  margin: 4rem auto 8rem auto;

  max-width: var(--max-width);
  height: 150px;
  overflow-x: hidden;

  display: flex;
  align-items: flex-end;

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 6.25rem;
    background-color: var(--text);
    color: var(--gray-700);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    font-weight: 600;
    text-transform: uppercase;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--text) transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  svg {
    color: var(--primary);
  }
`;

export default ExpertienceStyle;
