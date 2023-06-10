
import React from 'react';
import { Container } from "@nextui-org/react"
import { Box } from "./page-layout"
import {AdminTask} from '../components/task/AdminTask'
import {ListTask} from '../components/task/ListTask'


export const Content: React.FC = () => (

  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <Container>
        <AdminTask />
    </Container>
    <Container>
        <ListTask />
    </Container>
  </Box>
);