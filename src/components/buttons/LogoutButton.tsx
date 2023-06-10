import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@nextui-org/react";


export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Button auto ghost color="primary"  onClick={handleLogout}>
    cerrar session
  </Button>
  );
};
