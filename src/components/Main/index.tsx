import { useState } from "react";
// import { SectionProps } from "../../interfaces";
import styled from "styled-components";
import Contact from "../Contact";
import HardSkills from "../HardSkills";
import Iframe from "../Iframe";
import Modal from "../Modal";
import ProjectCard from "../ProjectCard";

const Section = styled.section`
  scroll-margin-top: 9.5rem;
  width: var(--width);
  max-width: var(--max-width);
`;

const SMain = styled.section`
  * > {
    width: var(--width);
    max-width: var(--max-width);
    margin: 0 auto;
    border: solid red 1px;
  }

  /* .about p {
    text-indent: 2.1rem;
    text-align: justify;
  }

  .about p strong {
    color: var(--primary-color);
  }

  .hardskills {
    display: flex;
    align-items: end;
    gap: 2rem;
    width: 100%;
    height: 140px;
    margin: 2rem 0;
    overflow: hidden;
  }

  .hardskills i {
    font-size: 5rem;
    color: var(--gray-100);
  } */
`;

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setsetUrl] = useState("");

  const click = (url: string | null) => {
    if (url) setsetUrl(url);
    setIsOpen(true);
  };

  return (
    <SMain>
      {isOpen && (
        <Modal>
          <button
            onClick={() => setIsOpen(false)}
            className="btn-closed"
            children={"X"}
          />

          <Iframe src={url}></Iframe>
        </Modal>
      )}

      <Section id="início">
        <h2 className="title">
          Sobre <span> mim</span>
        </h2>
        <div className="about">
          <p>
            Sou um <strong>desenvolvedor web</strong> com{" "}
            <strong>experiência</strong> em criar{" "}
            <strong>soluções personalizadas</strong> que atendem às{" "}
            <strong>necessidades específicas</strong> de cada cliente. Dominando
            um amplo conjunto de <strong>tecnologias</strong>, desde{" "}
            <strong>bancos de dados</strong> até{" "}
            <strong>frameworks front-end</strong>, construo{" "}
            <strong>aplicações escaláveis.</strong>
            Desenvolvi diversos <strong>projetos</strong>,{" "}
            <strong>otimizando processos</strong> e entregando{" "}
            <strong>resultados</strong> que superaram as{" "}
            <strong>expectativas dos clientes</strong>.
          </p>
        </div>
        <HardSkills />
      </Section>

      <Section id="projetos">
        <h2 className="title">
          Meus <span> Projetos</span>
        </h2>

        <ProjectCard click={click} />
      </Section>
      <div id="contato"></div>
      <Contact />
    </SMain>
  );
}

export default Main;
