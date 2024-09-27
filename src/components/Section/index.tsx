import styled from "styled-components";

const Section = styled.section`
  /* scroll-margin-top: 9.5rem; */
  /* border: solid red 1px; */

  width: var(--width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 8rem;
  padding-top: 8rem;

  .title {
    text-transform: uppercase;
    text-align: center;
    font-size: 2em;
    letter-spacing: 0.11em;
  }
`;

export default Section;
