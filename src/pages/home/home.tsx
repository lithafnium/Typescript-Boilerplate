import React from "react";
import { Button } from "@app/shared/components/index";
import { Container, ContainerInner } from "./styles";
import { apiGet } from "@app/utils/api";

const Home = () => {
  const handleClick = async () => {
    const response = await apiGet("/test", {});
    console.log(response);
    return response;
  };

  return (
    <Container>
      <ContainerInner>
        <Button padding="20px 40px" onClick={async () => await handleClick()}>
          Test Endpoint
        </Button>
      </ContainerInner>
    </Container>
  );
};

export default Home;
