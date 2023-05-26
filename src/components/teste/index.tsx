import { TesteStyled } from './profile.styled';

const Teste = ({ id, text }: any) => {
    return <TesteStyled id={id}>{text}</TesteStyled>;
};

export default Teste;
