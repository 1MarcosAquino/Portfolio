import { createGlobalStyle } from 'styled-components';

export const TypographyStyled = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
    }
        h1{
            font-size:3.3rem;
        }

        a,p,span,li,div{
            font-size: 1.5rem;
        }
    
`;
