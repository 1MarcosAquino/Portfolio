import Modal from '../../Components/Modal';
import Projects from '../../Components/Projects';
import MainStyle from './style';

import About from '../../Components/About';
import Contact from '../../Components/Contact';
import Expertience from '../../Components/Expertience';
import Header from '../../Components/Header';

function Main() {
    return (
        <MainStyle>
            <Modal />
            <Header />
            <About />
            <Projects />
            <Expertience />
            <Contact />
        </MainStyle>
    );
}

export default Main;
