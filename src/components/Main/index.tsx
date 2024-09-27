import Modal from "../Modal";
import Projects from "../Projects";
import MainStyle from "./style";

import "../../styles/tootip.css";
import Section from "../Section";

function Main() {
  return (
    <MainStyle>
      {" "}
      <Modal />
      <Section id="projetos">
        <h2 className="title">
          Meus <span> Projetos</span>
        </h2>

        <Projects />
      </Section>
    </MainStyle>
  );
}

export default Main;
