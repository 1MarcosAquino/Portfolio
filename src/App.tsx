import Main from './Pages/Main';
import { MyProvider } from './Provider';
import { ResetCSS } from './Styles/reset';

function App() {
    return (
        <>
            <ResetCSS />
            <MyProvider>
                <Main />
            </MyProvider>
        </>
    );
}

export default App;
