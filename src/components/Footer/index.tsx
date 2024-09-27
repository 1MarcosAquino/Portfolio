import FooterStyle from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <hr />
      <p>
        &copy; 2024 Portfólio de Marcos Aquino - Todos os direitos reservados!
      </p>
      <a className="backTop" href="#top">
        VOLTA AO TOPO
      </a>
    </FooterStyle>
  );
};

export default Footer;
