import Section from '../Section';

const About = () => {
    return (
        <Section title="Sobre mim" id="sobre_mim">
            <p className="text-custom fs-5">
                Sou um <strong className="text-emphasis">desenvolvedor web</strong> com <strong className="text-emphasis">experiência</strong> em
                criar <strong className="text-emphasis">soluções personalizadas</strong> que atendem às{' '}
                <strong className="text-emphasis">necessidades específicas</strong> de cada cliente. Dominando um amplo conjunto de{' '}
                <strong className="text-emphasis">tecnologias</strong>, desde <strong className="text-emphasis">bancos de dados</strong> até{' '}
                <strong className="text-emphasis">frameworks front-end</strong>, construo{' '}
                <strong className="text-emphasis">aplicações escaláveis.</strong> Desenvolvi diversos{' '}
                <strong className="text-emphasis">projetos</strong>, <strong className="text-emphasis">otimizando processos</strong> e entregando{' '}
                <strong className="text-emphasis">resultados</strong> que superaram as{' '}
                <strong className="text-emphasis">expectativas dos clientes</strong>.
            </p>
        </Section>
    );
};

export default About;
