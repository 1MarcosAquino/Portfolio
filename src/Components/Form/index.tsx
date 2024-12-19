import { useState } from 'react';
import StyleForm from './style';
const URL = 'https://formsubmit.co/contatomarcosaquino@gmail.com';

const Form = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        try {
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event.body),
            })
                .then((res) => res.json())
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyleForm onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                value={values.name}
                onChange={handleChange}
                aria-label="Nome"
            />
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                value={values.email}
                onChange={handleChange}
                aria-label="E-mail"
            />
            <textarea
                name="message"
                placeholder="Mensagem"
                required
                value={values.message}
                onChange={handleChange}
                aria-label="Mensagem"
            />
            <button type="submit">Enviar</button>
        </StyleForm>
    );
};

export default Form;
