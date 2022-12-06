import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { NhostClient, NhostReactProvider } from "@nhost/react";

const subdomain = "ilmlkvvcvsjibqpthmkm";
const region = "ap-southeast-1";

const nhost = new NhostClient({
  backendUrl: `https://ilmlkvvcvsjibqpthmkm.nhost.run`,
  autoRefreshToken: true,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NhostReactProvider nhost={nhost}>
      <App />
    </NhostReactProvider>
  </React.StrictMode>
);
