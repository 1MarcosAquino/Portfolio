import Main from "./components/Main";
import { MyProvider } from "./provider";
import { ThemeDark } from "./styles/dark.theme";
import "./styles/tootip.css";

function App() {
  return (
    <>
      <ThemeDark />
      <MyProvider>
        <Main />
      </MyProvider>
    </>
  );
}

export default App;
