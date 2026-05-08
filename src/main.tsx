import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles.css";

import { RootLayout } from "./RootLayout";
import { HomePage } from "./routes/index";
import { TheDoctrinePage } from "./routes/the-doctrine";
import { TheWorkPage } from "./routes/the-work";
import { TheNamePage } from "./routes/the-name";
import { NotFoundPage } from "./routes/NotFound";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/the-doctrine" element={<TheDoctrinePage />} />
            <Route path="/the-work" element={<TheWorkPage />} />
            <Route path="/the-name" element={<TheNamePage />} />
            {/* Preserve any external links to the previous URL */}
            <Route path="/the-altai" element={<Navigate to="/the-name" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
