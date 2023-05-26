import { createGlobalStyle } from 'styled-components';

export const ThemeDark = createGlobalStyle`

    :root{
        --primary-color: #00d8ff;
        --secondary-color: #454747;
        /*
        --tertiary-color: #556E69;
        --quaternary-color: #6B847F;
        --quinary-color: #809A95;
        --senary-color: #FAFAFA;
        --septenary-color: #1F1F1F; */

        --background: #282A36;
        --text-color: #ab7ff8;
        --border-color: #50309a;
    }

    .card{
        border: 2px solid var(--primary-color);
    }
`;

/*#8257E6;*/
