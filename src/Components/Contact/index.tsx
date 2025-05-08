import { alert } from '../Alert';
import Icon from '../Icon';
import Section from '../Section';
import useClipboard from './hook';

import './style.css';

const contacts = [
    // {
    //     icon: 'line-md:email',
    //     href: 'mailto:contatomarcosaquino@gmail',
    //     text: 'contatomarcosaquino@gmail',
    // },
    {
        icon: 'ic:sharp-whatsapp',
        href: 'https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio',
        text: 'Clique aqui para enviar uma mensagem no WhatsApp',
    },
    {
        icon: 'line-md:github-loop',
        href: 'https://github.com/1MarcosAquino',
        text: 'Clique aqui para acessar meu GitHub',
    },
    {
        icon: 'line-md:linkedin',
        href: 'https://www.linkedin.com/in/marcos-aquino/',
        text: 'Clique aqui para acessar meu Linkedin',
    },
];

const ContactSection = () => {
    const { clipboard } = useClipboard();

    const action = () => {
        const { status, message } = clipboard('contatomarcosaquino@gmail.com');

        if (status) {
            alert.success(message);
        } else {
            alert.error(message);
        }
    };

    return (
        <Section title="Contato" id="contato">
            <div className="subtitle">
                <h3 className="text-info">Deixe-me uma mensagem ou mande um e-mail</h3>
                <p>Vamos conversar e desenvolver soluções para sua empresa, juntos!</p>
            </div>

            <div className="container">
                <ul className="ul-contact">
                    {contacts.map((contact, index) => (
                        <li className="li-contact" key={index}>
                            <Icon icon={contact.icon} />
                            <a className="button" target="_blank" rel="noopener noreferrer" href={contact.href}>
                                {contact.text}
                            </a>
                        </li>
                    ))}

                    <li className="li-contact">
                        <Icon icon={'basil:gmail-outline'} />
                        <button onClick={action}>
                            <span>Clique para copiar meu e-mail.</span>
                        </button>
                    </li>
                </ul>
            </div>
        </Section>
    );
};

export default ContactSection;
