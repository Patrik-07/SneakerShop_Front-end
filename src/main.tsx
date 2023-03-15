import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

import App from "./app/app";

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
