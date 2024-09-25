import StyleForm from "./style";
//https://formsubmit.co/your@email.com
const Form = () => {
  return (
    <StyleForm action="#" method="POST">
      <input type="text" name="name" placeholder="Nome" required />
      <input type="email" name="email" placeholder="E-mail" required />
      <textarea name="message" placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </StyleForm>
  );
};

export default Form;
