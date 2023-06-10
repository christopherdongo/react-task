import React from 'react';
import { Avatar, Grid, Text } from '@nextui-org/react';
import { useAuth0 } from "@auth0/auth0-react";

export const AvatarUser: React.FC =()=>{
   
  const {user} = useAuth0();

  console.log(user)

    return (
        <Grid.Container gap={2}>
        <Grid>
          {
            user && <Avatar
            src={user.picture}
            css={{ size: "$18" }}
          />
          }
        </Grid>
         {
          user && <Grid>
          <Text><Text span weight="bold">User:</Text> {user.nickname}</Text>
          <Text><Text span weight="bold">Email:</Text> {user.email}</Text>
        </Grid>
         }
      </Grid.Container>
    )
}