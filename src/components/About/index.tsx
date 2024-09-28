import AboutStyle from "./style";

const About = () => {
  return (
    <AboutStyle
      id="sobre_mim"
      className="about container"
      style={{ maxWidth: "var(--max-width)" }}
    >
      <h2 className="title">
        Sobre <span> mim</span>
      </h2>
      <p>
        Sou um <strong>desenvolvedor web</strong> com{" "}
        <strong>experiência</strong> em criar{" "}
        <strong>soluções personalizadas</strong> que atendem às{" "}
        <strong>necessidades específicas</strong> de cada cliente. Dominando um
        amplo conjunto de <strong>tecnologias</strong>, desde{" "}
        <strong>bancos de dados</strong> até{" "}
        <strong>frameworks front-end</strong>, construo{" "}
        <strong>aplicações escaláveis.</strong>
        Desenvolvi diversos <strong>projetos</strong>,{" "}
        <strong>otimizando processos</strong> e entregando{" "}
        <strong>resultados</strong> que superaram as{" "}
        <strong>expectativas dos clientes</strong>.
      </p>
    </AboutStyle>
  );
};

export default About;
