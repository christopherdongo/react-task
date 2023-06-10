import React from 'react';
import { Grid  } from '@nextui-org/react';
import {Task} from './Task';
import {useGlobalContext} from '../../context/global'


export const ListTask: React.FC =()=>{

    const currentUser = useGlobalContext();

    return (
    
        <Grid.Container gap={2} justify="center" css={{
            marginTop:'20px'
        }}>
            {
                currentUser?.task.map( (item, index) => (
                    <Grid  xs={12} sm={6} md={4}
                    >
                    <Task  key={index} {...item}  />
                  </Grid>
                ))
            }
        </Grid.Container>
       
    )
}