import { useEffect, useState } from 'react';

import About from '../../Components/About';
import { Alert } from '../../Components/Alert';
import Contact from '../../Components/Contact';
import Expertience from '../../Components/Expertience';
import Header from '../../Components/Header';
import Icon from '../../Components/Icon';
import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';

function Main() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme);
    }, [theme]);

    return (
        <>
            <Alert />
            <button className="chooseTheme" onClick={() => setTheme(!theme)}>
                {theme && <Icon icon="line-md:moon-twotone-loop" width="32" height="32" />}
                {!theme && <Icon icon="line-md:sun-rising-loop" width="32" height="32" />}
            </button>

            <Header />
            {/* <div className="body-wrapper p-2"></div> */}

            <main className="body-wrapper p-2">
                {/* <div className="container-fluid"></div> */}
                <About />

                <Projects />
                <Expertience />
                <Contact />
                <Modal />

                <footer>
                    <p>&copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
                    <a href="#top">
                        <Icon icon="ep:arrow-up-bold" height="32" width="32" />
                    </a>
                </footer>
            </main>
        </>
    );
}

export default Main;
