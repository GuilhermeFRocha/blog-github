import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalstyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Post } from "./Post";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/post" element={<Post />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
