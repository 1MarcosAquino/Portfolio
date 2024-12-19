import { createGlobalStyle } from 'styled-components';

export const ThemeDark = createGlobalStyle`
:root {
    --primary-1: #0066cc;
    --primary: #4a90e2;
    --secondary: #673ab7;
    --secondary-2: #03a9f4;
    --text: #333333; /* Cor escura para texto */
    --gray-100: #f7f7f7;
    --gray-200: #e0e0e0;
    --gray-600: rgba(120, 120, 120, 0.275);
    --gray-500: rgba(0, 0, 0, 0.1);
    --gray-700: #f0f0f0;

    --background: #ffffff; /* Fundo principal branco */
    --background-2: #f5f5f5; /* Fundo secundário mais claro */
    --gradient: linear-gradient(to left, var(--primary), var(--secondary));
    --gradient-2: linear-gradient(to right bottom, var(--primary), var(--secondary));
    --gradient-3: linear-gradient(to right, var(--primary), var(--secondary));

    --focus: #ff8c00; /* Cor de destaque para foco */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
    --animation-speed: 0.3s;
    --animation-ease: ease-in-out;

    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);

    --width: 90%;
    --max-width: 1250px;

    color: var(--text);
    background-color: var(--background);
    scroll-behavior: smooth;

    font-family: "Poppins", sans-serif;
}`;
