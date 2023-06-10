import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import { PageLayout } from "../components/page-layout";

export const CallbackPage: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Error
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>{error.message}</span>
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout__content" />
    </div>
  );
};
