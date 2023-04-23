import React from "react";
import { Center, Spinner, Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <div>
      <Center h={"100vh"}>
        <Box transform={"scale(2.5)"}>
          <Spinner size={"xl"} />
        </Box>
      </Center>
    </div>
  );
};

export default Loader;
