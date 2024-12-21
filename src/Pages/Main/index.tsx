// import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';
import MainStyle from './style';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Expertience from '../../Components/Expertience';
import Header from '../../Components/Header';
import { Theme } from '../../Styles/theme';

function Main() {
    const [theme, setTheme] = useState(true);

    return (
        <>
            <Theme dark={theme} />
            <MainStyle>
                <Icon
                    className="chooseTheme"
                    onClick={() => setTheme(!theme)}
                    icon={`line-md:${theme ? 'moon' : 'sun-rising'}-loop`}
                />

                {/* <Modal /> */}
                <Header />
                <About />
                <Projects />
                <Expertience />
                <Contact />
            </MainStyle>
        </>
    );
}

export default Main;
