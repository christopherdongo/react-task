import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import { GlobalProvider } from "./context/global";
import { NextUIProvider } from '@nextui-org/react';


const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
      <Auth0ProviderWithNavigate>
        <NextUIProvider>
        <App />
      </NextUIProvider>
      </Auth0ProviderWithNavigate>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

