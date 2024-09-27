import Modal from "../Modal";
import Projects from "../Projects";
import MainStyle from "./style";

import About from "../About";
import Contact from "../Contact";
import Expertience from "../Expertience";
import Footer from "../Footer";
import Header from "../Header";

function Main() {
  return (
    <MainStyle>
      <Modal />
      <Header />
      <About />
      <Projects />
      <Expertience />
      <Contact />
      <Footer />
    </MainStyle>
  );
}

export default Main;
