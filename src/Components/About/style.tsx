import styled from 'styled-components';

const AboutStyle = styled.section`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        letter-spacing: 1.8px;
    }

    h2 {
        font-size: xx-large;
        text-transform: uppercase;
        margin-bottom: 2rem;
        text-align: center;
    }

    p {
        font-size: large;
        text-align: justify;
        text-indent: 6rem;
    }
`;

export default AboutStyle;
