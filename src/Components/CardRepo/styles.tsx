import styled from 'styled-components';

const CardRepoStyle = styled.div`
    display: grid;
    gap: 0.5rem 0;

    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: 15% auto 15%;

    grid-template-areas:
        '. title title title'
        'description description description description'
        'github deploy . languages';

    width: 100%;
    max-width: var(--cardMaxWidth);
    height: var(--cardHeigth);

    padding: 0.5rem;

    border-radius: 16px;
    border: 4px solid var(--background-2);
    box-shadow: 0 4px 8px var(--gray-600);

    p {
        text-shadow: 2px 2px 3px var(--background);
    }

    .name {
        grid-area: title;
        text-align: end;

        font-size: 1em;
        font-weight: 600;
    }

    .description {
        grid-area: description;
        overflow-y: auto;
    }

    .github {
        grid-area: github;
    }

    .deploy {
        grid-area: deploy;
    }

    .languages {
        grid-area: languages;
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

export default CardRepoStyle;
