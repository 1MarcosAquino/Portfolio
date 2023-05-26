import Header from './components/header';
import Profile from './components/profile';
import Projects from './components/projects';
import Repositories from './components/repos';
import Teste from './components/teste';

import {
    ThemeDark,
    ThemeLigth,
    GlobalStyles,
    ResetStyled,
    TypographyStyled,
} from './components/styles';
import { useState } from 'react';

const App = () => {
    const [theme, setTheme] = useState(false);

    return (
        <>
            {theme ? <ThemeDark /> : <ThemeLigth />}
            <ResetStyled />
            <GlobalStyles />
            <TypographyStyled />

            {/* <GlobalStyles /> */}

            <Header theme={theme} setTheme={setTheme} />
            <main>
                <Profile />
                {/* 
                <Repositories />*/}
                <Projects />
            </main>
        </>
    );
};

export default App;
