import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import "./assets/css/responsive.css";
import { Autocontext } from "./autocontext/Autocontext.jsx";

import "@fontsource/ubuntu"; // default weight 400
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Autocontext>
        <App />
      </Autocontext>
    </BrowserRouter>
  </StrictMode>,
);
