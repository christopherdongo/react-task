import React from 'react'
import {Button } from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton: React.FC=()=>{

    const { loginWithRedirect } = useAuth0();

    const handleSignUp = async () => {
      await loginWithRedirect({
        appState: {
          returnTo: "/",
        },
        authorizationParams: {
          prompt: "login",
          screen_hint: "signup",
        },
      });
    };

    return (
        <>
        <Button auto ghost color="primary"  onClick={handleSignUp}>
              crear cuenta
            </Button>
        </>
    )

}