import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   
*{
            background-color: var(--background);
        color: var(--text-color);
}

    main{margin-top: 90px;}

        a {
        color: var(--septenary-color);
    }

    button{
        width:50px;
        height: 30px;
        font-size: large;
        cursor: pointer;
    }

`;
