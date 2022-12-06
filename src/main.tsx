import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { NhostClient, NhostReactProvider } from "@nhost/react";

const nhost = new NhostClient({
  subdomain: "ilmlkvvcvsjibqpthmkm",
  region: "ap-southeast-1",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NhostReactProvider nhost={nhost}>
      <App />
    </NhostReactProvider>
  </React.StrictMode>
);
