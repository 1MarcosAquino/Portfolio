import { createGlobalStyle } from 'styled-components';

export const Theme = createGlobalStyle<{ dark?: boolean }>`
:root {

    /* THEME COLORS START */
    --primary-color: #0D6EFD;
    --primary-color-2: #0DCAF0;

    --warning-color: #FFC107;
    --success-color: #198754;
    --danger-color: #DC3545;
    --light-color: #F8F9FA;
    --dark-color: #212529;
    /* THEME COLORS END */

    /* BORDER CORLORS START */
    --border-color-1: #DEE2E6;
    --border-color-2: #CED4DA;
    --border-color-3: #ADB5BD;
    --border-color-4: #6C757D;
    --border-color-5: #495057;

    --border-primary: var(--primary-color);
    --border-warning: var(--warning-color);
    --border-danger: var(--danger-color);
    --border-success: var(--success-color);
    --border-dark: var(--dark-color);
    --border-light: var(--light-color);
    /* BORDER CORLORS END */

    /* BACKGROUND CORLORS START */
    --background-1: #F8F9FA;
    --background-2: #E9ECEF;
    --background-3: #DEE2E6;
    --background-4: #CED4DA;
    --background-5: #ADB5BD;

    --background-primary: ${({ dark }) => (dark ? '#1E253F' : '#d8d8d8')};
    --background-warning: var(--warning-color);
    --background-danger: var(--danger-color);
    --background-success: var(--success-color);
    --background-dark: var(--dark-color);
    --background-light: var(--light-color);
    /* BACKGROUND CORLORS END */

    /* TEXT CORLORS START */
    --text-primary: ${({ dark }) => (dark ? '#F8F8F8' : '#1E253F')};
    --text-primary-hover: ${({ dark }) => (dark ? '#1E253F' : '#F8F9FA')};
    /* TEXT CORLORS END */

    /* TEXT DETAIL START */
    --details-background: var(--primary-color-2);
    --detail-header-background: var(--gradient-primary);
    --detail-footer-background: var(--gradient-primary);

    --details-height: 15dvh;
    --details-width: 100%;
    --details-border-radius: 50px;
    /* TEXT DETAIL END */









    /* THEME COLORS */
    --bg-color: ${({ dark }) => (dark ? '#1C1F26' : '#F8F9FA')};
    --text-color: ${({ dark }) => (dark ? '#E9ECEF' : '#212529')};
    --highlight-color: ${({ dark }) => (dark ? '#0DCAF0' : '#007BFF')};
    --button-color: ${({ dark }) => (dark ? '#0A6C94' : '#0056B3')};
    --border-color: ${({ dark }) => (dark ? '#343A40' : '#DEE2E6')};
    /* THEME COLORS */



    /* 
    --primary-2: var(--button-color);
    --primary-1: var(--highlight-color);
    */

    /*
    */

    /* --primary-1: #53a3d6; 
    --secondary-1: #4B33D0; */

    --primary-1: #76b4dd;     /* azul mais claro e suave */
    --secondary-1: #7b64df;   /* roxo menos saturado */
    
    --primary-2: #00e9ff;
    --primary-3: #5CE1E6; 

    /* --primary-1: var(--primary-3);  */

    --secondary-2: #0073ff;

    --shadow-1: 2px 2px 5px #0F162F;
    --shadow-2: 1px 1px 1px #0F162F;
    --shadow-3: 2px 2px 5px #0F162F;
    --shadow-4: 2px 2px 3px #0F162F;

    --border-1: #0F162F;

    

    --width: 90%;
    --max-width: 1250px;

    --text-1: #F8F9FA;
    --text-2: ${({ dark }) => (dark ? '#333333' : '#F8F9FA')};
    --text-3: #121214;
    --text-4: ${({ dark }) => (dark ? '#F8F9FA' : '#333333')};
    --text-5: ${({ dark }) => (dark ? '#F8F9FA' : '#121214')};

    --background-1:  ${({ dark }) => (dark ? '#1E253F' : '#d8d8d8')};
    --background-2: ${({ dark }) => (dark ? '#121214' : '#f0f0f0')};
    --background-3: ${({ dark }) => (dark ? '#dddddd' : '#121214')};
    --background-4: ${({ dark }) => (dark ? '#202020' : '#f0f0f0')};

    /* CARD REPO INICIO */
    --cardRepo-background: ${({ dark }) => (dark ? '#1E253F' : '#f0f0f0')};
    --cardRepo-title: ${({ dark }) => (dark ? '#F8F9FA' : '#1E253F')};
    --cardRepo-description: ${({ dark }) => (dark ? '#8B8C98' : '#1E253F')};
    --cardRepo-container-image-background: ${({ dark }) => (dark ? '#1e1d22' : '#1e1d22')};
    --cardRepo-btn-color: ${({ dark }) => (dark ? '#1E253F' : '#1E253F')};
    --cardRepo-btn-background: var(${({ dark }) => (dark ? '--primary-3' : '--primary-3')});
    /* CARD REPO FIM */


    --expertience-color: var(${({ dark }) => (dark ? '--primary-1' : '--secondary-2')});

    --gradient-primary: linear-gradient(to left, var(--primary-1), var(--secondary-1));
    --gradient-2: linear-gradient(to right bottom, var(--primary-1), var(--secondary-1));
    --gradient-3: linear-gradient(to right, var(--primary-1), var(--secondary-1));
    
    --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 3);
    --cardHeigth: calc(var(--cardMaxWidth) / 1.65);



    @media (min-width: 800px) {
        --detailCurve: 200px;
        --width: 80%;
        --cardMaxWidth: calc((var(--max-width) - 1rem * 3) / 2);

    }

}

    body{
        background-color: var(--background-primary) !important;
        color: var(--text-primary) !important;
        /* 
        */
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif;
    }

    .chooseTheme{
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 10;
        background-color: transparent;
        color: var(--text-primary);

        width: 2rem;
        height: 2rem;

        transition: color 0.5s;
    }

    .link {
        color: var(--text-primary);
        background-color: transparent;
        text-decoration: none;

        transition: color 0.5s;
        text-shadow: var(--shadow-2);
    }

    .link:hover {
        color: var(--text-primary-hover);
    }

    .bg-gradient-primary{
        background: var(--gradient-primary);
    }

.theme-primary {
    
    background-color: var(--background-primary) !important; 
    /* 
    background: var(--gradient-primary) !important; 
    */
    /* 
    */
    color: var(--text-primary) !important;
}

    .container {
        height: 70vh;
    }

    /* .details-header,
    .details-footer {
        height: var(--details-height);
        min-width: var(--details-width);
        background: var(--details-background);
    } */

    .details-border-radius-top {
        border-top-right-radius: var(--details-border-radius);
        border-top-left-radius: var(--details-border-radius);
    }
    .details-border-radius-bottom {
        border-bottom-right-radius: var(--details-border-radius);
        border-bottom-left-radius: var(--details-border-radius);
    }

`;
