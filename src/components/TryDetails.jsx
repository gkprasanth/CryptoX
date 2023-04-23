import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { useParams } from "react-router-dom";
import { Box, Container, Image } from "@chakra-ui/react";

const TryDetails = () => {
  const [coin, setCoin] = useState([]);
  const [currency, setCurrency] = useState("inr");


  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      console.log(data);
      setCoin(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Image src={coin.image.small} />
      </Box>
    </Container>
  );
};

export default TryDetails;
