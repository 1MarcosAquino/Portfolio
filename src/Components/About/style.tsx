import styled from 'styled-components';

const AboutStyle = styled.section`
    .container {
        padding: 5rem 0;

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

    @media (min-width: 675px) {
        .container {
            padding: 0;
        }
    }
`;

export default AboutStyle;
