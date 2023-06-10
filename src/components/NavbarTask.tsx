import React from 'react';
import { Navbar, Text } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo"
import{LoginButton} from './buttons/LoginButton';
import {SignupButton} from './buttons/SignupButton';
import {AvatarUser} from './Avatar/AvatarUser';
import {LogoutButton} from './buttons/LogoutButton';
import {useAuth0} from '@auth0/auth0-react'


export const NavbarTask: React.FC = () => {

  const { isAuthenticated } = useAuth0(); 
    return (
      <Navbar isBordered variant="floating"

      containerCss={{
        '@smMax': {
          height:'220px',
          flexDirection: 'column',
        }
      }}
      >
        <Navbar.Brand
        >
          <AcmeLogo />
          <Text h1 
          weight="bold"
          size={30}
          color="inherit" >
          lista de tareas
          </Text>
        </Navbar.Brand>
        <Navbar.Brand>
          <AvatarUser />
        </Navbar.Brand>
        <Navbar.Content
        >
           {
            !isAuthenticated && (
              <>
           <Navbar.Item>
           <LoginButton />
          </Navbar.Item>
          <Navbar.Item>
            <SignupButton />
          </Navbar.Item>
              </>
            )
           }
           {
            isAuthenticated && (
              <Navbar.Item>
                <LogoutButton />
             </Navbar.Item>
            )
           }
        </Navbar.Content>
      </Navbar>
    )

}

