import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { ContextProvider } from "./providers/ContextProvider.jsx";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
