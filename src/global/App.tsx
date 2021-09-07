import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView } from "~features/home/views/HomeView";
import "./styles/global.scss";
import { useScrollToTop } from "~ui-toolkit/hooks/useScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
}
export default App;
