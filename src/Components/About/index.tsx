import Section from '../Section';

const About = () => {
    const styleStrong = { color: 'var(--text)' };

    const textCustom: React.CSSProperties = {
        color: 'var(--text)',
        textAlign: 'justify',
        textIndent: '3.5rem',
    };

    return (
        <Section title="Sobre mim" id="sobre_mim">
            <p style={textCustom}>
                Sou um <strong style={styleStrong}>desenvolvedor web</strong> com <strong style={styleStrong}>experiência</strong> em criar{' '}
                <strong style={styleStrong}>soluções personalizadas</strong> que atendem às{' '}
                <strong style={styleStrong}>necessidades específicas</strong> de cada cliente. Dominando um amplo conjunto de{' '}
                <strong style={styleStrong}>tecnologias</strong>, desde <strong style={styleStrong}>bancos de dados</strong> até{' '}
                <strong style={styleStrong}>frameworks front-end</strong>, construo <strong style={styleStrong}>aplicações escaláveis.</strong>{' '}
                Desenvolvi diversos <strong style={styleStrong}>projetos</strong>, <strong style={styleStrong}>otimizando processos</strong> e
                entregando <strong style={styleStrong}>resultados</strong> que superaram as{' '}
                <strong style={styleStrong}>expectativas dos clientes</strong>.
            </p>

            {/* <div className="perfil">
                <img src="perfil.png" alt="perfil" width={300} />
            </div> */}
        </Section>
    );
};

export default About;
