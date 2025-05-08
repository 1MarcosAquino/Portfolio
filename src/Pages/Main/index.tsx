import About from '../../Components/About';
import { Alert } from '../../Components/Alert';
import ChooseTheme from '../../Components/ChooseTheme';
import Contact from '../../Components/Contact';
import Header from '../../Components/Header';
import Icon from '../../Components/Icon';
import Jobs from '../../Components/Jobs';
import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';

function Main() {
    return (
        <div className="container-fluid">
            <Alert />
            <ChooseTheme />
            <Modal />

            <Header />
            <About />
            <Jobs />
            <Projects />
            {/* <Expertience /> */}
            <Contact />

            <footer style={{ textAlign: 'center', paddingBlock: '1rem' }}>
                <p className="text-secondary">&copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!</p>
                <a href="#top" style={{ color: 'var(--info)' }}>
                    <Icon icon="ep:arrow-up-bold" height="32" width="32" />
                </a>
            </footer>
        </div>
    );
}

export default Main;
