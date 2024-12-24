import { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle<{ dark?: boolean }>`
:root {
    --primary-1: #53a3d6; 
    --primary-2: #00e9ff;
    --secondary-1: #4B33D0;
    --secondary-2: #0073ff;

    --text-1: #f8f9fa;
    --text-2: ${({ dark }) => (dark ? '#333333' : '#f8f9fa')};
    --text-3: #121214;
    --text-4: ${({ dark }) => (dark ? '#f8f9fa' : '#333333')};
    --text-5: ${({ dark }) => (dark ? '#f8f9fa' : '#121214')};


    --background-1:  ${({ dark }) => (dark ? '#000' : '#ffffff')};
    --background-2: ${({ dark }) => (dark ? '#121214' : '#f0f0f0')};
    --background-3: ${({ dark }) => (dark ? '#dddddd' : '#121214')};
    --background-4: ${({ dark }) => (dark ? '#202020' : '#f0f0f0')};

    --expertience-color: var(${({ dark }) => (dark ? '--primary-1' : '--secondary-2')});

    --gradient-1: linear-gradient(to left, var(--primary-1), var(--secondary-1));
    --gradient-2: linear-gradient(to right bottom, var(--primary-1), var(--secondary-1));
    --gradient-3: linear-gradient(to right, var(--primary-1), var(--secondary-1));
    
    --shadow-1: 2px 2px 5px #0F162F;
    --shadow-2: 1px 1px 1px #0F162F;
    --shadow-3: 2px 2px 5px #0F162F;
    --shadow-4: 2px 2px 3px #0F162F;

    --border-1: #0F162F;

    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

    --detailCurve: 50px;

    --width: 90%;
    --max-width: 1250px;

    color: var(--text-1);
    background-color: var(--background-1);
    scroll-behavior: smooth;

    font-family: "Poppins", sans-serif;

    .chooseTheme{
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 10;
        background-color: transparent;

        width: 2rem;
        height: 2rem;

        transition: color 0.5s;
    }

    @media (min-width: 800px) {
        --detailCurve: 200px;
        --width: 80%;   
    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 2);

    }
}`;
