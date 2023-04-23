import { Container, HStack, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";

import img from "../assets/img.jpg";

const CardComponent = () => {
  return (
    <Container w={"full"}>
      <HStack>
        <Card>
          <CardHeader>
            <Text textAlign={"center"} fontSize="2xl">
              Card
            </Text>
          </CardHeader>

          <CardBody>
            <Image src={img} w="container.sm" />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text textAlign={"center"} fontSize="2xl">
              Card
            </Text>
          </CardHeader>

          <CardBody>
            <Image src={img} w="container.sm" />
          </CardBody>
        </Card>
      </HStack>
    </Container>
  );
};

export default CardComponent;
