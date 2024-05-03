
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { OutputProvider } from "./context/OutputContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OutputProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OutputProvider>
);
