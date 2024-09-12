import "./styles/global.css";
import "./styles/reset.css";
import "./styles/parallax.css";
import "./styles/tootip.css";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header userName="Marcos Aquino" />
      <img src="./public/spin.svg" alt="spin" className="spin" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
