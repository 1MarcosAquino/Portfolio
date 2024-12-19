import Main from './Pages/Main';
import { MyProvider } from './Provider';
import { ThemeDark } from './Styles/dark.theme';
import { ResetCSS } from './Styles/reset';

function App() {
    return (
        <>
            <ThemeDark />
            <ResetCSS />
            <MyProvider>
                <Main />
            </MyProvider>
        </>
    );
}

export default App;
