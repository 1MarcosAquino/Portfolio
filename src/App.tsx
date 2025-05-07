import Main from './Pages/Main';
import { MyProvider } from './Provider';

import './styles/global.css';
import './styles/index.css';
// import './styles/reset.css';

function App() {
    return (
        <MyProvider>
            <Main />
        </MyProvider>
    );
}

export default App;
