import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./components/page-loader";
import { Route, Routes } from "react-router-dom";
import { CallbackPage } from "./pages/CallbackPage";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";


export const App: React.FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
