import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/variables.css";
import "./styles/global.css";
import { ResourcesPage } from "./components/ResourcesPage/ResourcesPage.tsx";
import { SingleResourcePage } from "./components/SingleResourcePage/SingleResourcePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResourcesPage />} />
        <Route path="/resource/:resourceId" element={<SingleResourcePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
