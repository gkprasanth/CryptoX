import {
  Container,
  Heading,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../index";

const Try = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}`
      );
      console.log(data);
      setCoins(data);
    };
    fetchCoins();
  }, [currency]);

  return (
    <Container maxW={"container.xl"}>
      <HStack>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
      </HStack>

      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {coins.map((i) => (
          <CoinsCard
            name={i.name}
            key={i.id}
            price={i.current_price}
            image={i.image}
            symbol={i.symbol}
            rank={i.market_cap_rank}
            cSymbol={currencySymbol}
            id={i.id}
          />
        ))}
      </HStack>
    </Container>
  );
};

export default Try;

const CoinsCard = ({ image, name, symbol, price, rank, cSymbol, id }) => {
  return (
    <Link to={`/try/${id}`}>
      <VStack
        w={52}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.5s"}
        m={"4"}
        css={{
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={image}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"exchange"}
        />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>
          {cSymbol}
          {price}
        </Text>
      </VStack>
    </Link>
  );
};
