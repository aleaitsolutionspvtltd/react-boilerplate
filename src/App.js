import './styles/style.scss';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/routes";

function App() {
    return (
        <BrowserRouter>
            <main className='mainWrapper'>
                <AppRoute />
            </main>
        </BrowserRouter>
    );
}

export default App;
