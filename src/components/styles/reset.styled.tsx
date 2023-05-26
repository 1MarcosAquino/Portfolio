import { createGlobalStyle } from 'styled-components';

export const ResetStyled = createGlobalStyle`
::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: var(--secondary-color);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
}
* {
    font-size: 60%; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
     list-style: none;
}
    .hidden {
        display: none;
    }

    .show {
        display: flex;
    }
    
@media (min-width: 768px) {
    *{
         font-size: 62.5%; 
    }   
}
`;
