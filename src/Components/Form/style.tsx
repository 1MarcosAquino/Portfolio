import styled from 'styled-components';

const StyleForm = styled.form`
    background: var(--gradient-2);
    padding: 20px;
    border-radius: 10px;

    height: 350px;
    --mwidth: 300px;
    width: var(--mwidth);

    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input,
    textarea {
        width: 100%;
        padding: 10px 0;
        text-indent: 1rem;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        background-color: var(--background-4);
        color: var(--text-4);
        resize: none;
    }

    textarea {
        height: 150px;
    }
    button {
        background-color: var(--background-4);
        font-weight: 700;
        color: var(--text-4);
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        max-width: calc(var(--mwidth) / 2);
    }
`;

export default StyleForm;
