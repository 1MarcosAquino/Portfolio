import styled from "styled-components";
import { Container } from "../../interfaces";

const Tooltip = styled.div<Container>`
  /*
  display: inline-block;
  position: relative;

  .tooltiptext {
    visibility: hidden;
    width: 6.25rem;
    background-color: var(--gray-100);
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

  .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--gray-100) transparent transparent transparent;
  }

  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  } */
`;

export default Tooltip;
