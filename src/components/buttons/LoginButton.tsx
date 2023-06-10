import React from 'react'
import { Button } from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton: React.FC=()=>{

    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/",
          },
          authorizationParams: {
            prompt: "login",
          },
        });
      };
      

    return (
        <>
        <Button auto ghost color="primary"  onClick={handleLogin}>
              iniciar session
            </Button>
        </>
    )

}