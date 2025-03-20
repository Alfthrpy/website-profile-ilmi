import { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import Home from "./components/pages/home";
import Organization from "./components/pages/organization";
import { Toaster } from "./components/ui/toaster";
import { LoadingScreen } from "./components/ui/loading-spinner";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<LoadingScreen text="Loading application..." />}>
        <AppRoutes />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
