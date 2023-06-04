import Header from './components/header';
import Profile from './components/profile';
import Projects from './components/projects';

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

            <Header theme={theme} setTheme={setTheme} />
            <main>
                <Profile />

                <Projects />
            </main>
        </>
    );
};

export default App;
