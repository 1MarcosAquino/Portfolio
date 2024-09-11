import HeaderMenu from "../HeaderMenu";

function Header({ userName }: { userName: string }) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2>{userName}</h2>
          <p>&#60; Desenvolvedor Web &#47;&#62;</p>
        </div>
        <HeaderMenu />
      </div>
      <hr />
    </header>
  );
}

export default Header;
