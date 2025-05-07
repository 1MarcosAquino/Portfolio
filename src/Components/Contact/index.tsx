import { alert } from '../Alert';
import Icon from '../Icon';
import Section from '../Section';
import useClipboard from './hook';
import StyleContact from './style';

const contacts = [
    // {
    //     icon: 'line-md:email',
    //     href: 'mailto:contatomarcosaquino@gmail',
    //     text: 'contatomarcosaquino@gmail',
    // },
    {
        icon: 'ic:sharp-whatsapp',
        href: 'https://api.whatsapp.com/send?phone=5582993233217&text=oi+vim+do+seu+portfolio',
        text: 'WhatsApp',
    },
    {
        icon: 'line-md:github-loop',
        href: 'https://github.com/1MarcosAquino',
        text: 'GitHub',
    },
    {
        icon: 'line-md:linkedin',
        href: 'https://www.linkedin.com/in/marcos-aquino/',
        text: 'Linkedin',
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
            <StyleContact>
                <div className="container">
                    <div className="subtitle">
                        <h3>Deixe-me uma mensagem ou mande um e-mail</h3>
                        <p>Vamos conversar e desenvolver soluções para sua empresa, juntos!</p>
                    </div>

                    <ul>
                        {contacts.map((contact, index) => (
                            <li key={index}>
                                <Icon icon={contact.icon} />
                                <a className="button" target="_blank" rel="noopener noreferrer" href={contact.href}>
                                    {contact.text}
                                </a>
                            </li>
                        ))}

                        <li>
                            <Icon icon={'basil:gmail-outline'} />
                            <button className="btn-link" onClick={action}>
                                <span>Clique para copiar.</span>
                            </button>
                        </li>
                    </ul>

                    {/* <Form /> */}

                    {/* <hr /> */}
                </div>
            </StyleContact>
        </Section>
    );
};

export default ContactSection;
