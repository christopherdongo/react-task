import React from "react";
import { Container, Col, Loading, Spacer, Row  } from '@nextui-org/react';

export const PageLoader: React.FC = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

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
