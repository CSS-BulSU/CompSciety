// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind is imported here
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
