import styled from "styled-components";
import { Iiframe } from "../../interfaces";

const Iframe = styled.iframe<Iiframe>`
  background-color: #ffffff;
  border: none;
  min-width: 100%;
  min-height: 100%;
`;

export default Iframe;
