import styled from 'styled-components';

const StyleSection = styled.section`
    margin-top: 2.5rem;

    .section-title {
        margin-bottom: 3rem;
        text-transform: uppercase;
        text-align: center;
        font-size: 1.8em;
        letter-spacing: 0.11em;
    }

    hr {
        border: none;
        border-top: 1px solid var(--info);
    }
    /* padding: 10% 0; */

    .invert {
        /* transform: scaleX(-1);  */
        color: var(--info);
    }
`;
export default StyleSection;
