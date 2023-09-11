import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import "./assets/scss/tailwind.scss";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: en,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
