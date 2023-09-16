import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "./context/BooksContext";

const el = document.getElementById('root');
const root = createRoot(el);
root.render(
    <div>
        <Provider>
            <App />
        </Provider>
    </div>
);