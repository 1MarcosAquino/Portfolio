import Icon from '../Icon';
import Section from '../Section';
import StyledJobs from './style';

const jobs = [
    {
        icon: 'iconoir:www',
        title: 'Desenvolvedor Web',
        description: 'Desenvolvimento com PHP, MYSQL, HTML, CSS, JQuery e JavaScript.',
    },
    {
        icon: 'icons8:services',
        title: 'APIs sob medida',
        description: 'Estrutura lógica clara, projetadas para escalar e funcionar com eficiência.',
    },
    {
        icon: 'grommet-icons:system',
        title: 'Sistemas sob medida',
        description: 'Sistemas feitos para atender às necessidades do seu negócio e escalar conforme necessário.',
    },
    {
        icon: 'carbon:dns-services',
        title: 'Sites e Interfaces Web',
        description: 'Sites, landing pages e lojas virtuais, alinhado à identidade da marca e implementação de novas funcionalidades.',
    },
];

const Jobs = () => {
    return (
        <Section id="jobs" title="O que eu faço">
            <StyledJobs>
                {jobs.map((job, index) => (
                    <div key={index} className="card-job">
                        <div className="img-job">
                            <Icon icon={job.icon} width="32" height="32" />
                        </div>

                        <h2 className="title-job">{job.title}</h2>

                        <p className="description-job">{job.description}</p>
                    </div>
                ))}
            </StyledJobs>
        </Section>
    );
};

export default Jobs;
