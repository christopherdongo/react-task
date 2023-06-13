import React from "react";
import { Container, Col, Loading } from '@nextui-org/react';

export const PageLoader: React.FC = () => {

  return (
   <Container
   display="flex"
   justify="center"
   alignItems="center"
   alignContent="center"
   css={{
    minHeight: "100vh",
    minWidth: '100vw',
    padding: '0',
   }}
   >
    <Col
       >
      <Loading size="xl" css={{
        display: 'flex'
      }} 
      
      loadingCss={{ $$loadingSize: "80px", $$loadingBorder: "10px" }}
      />
       </Col>
   </Container>
  );
};
