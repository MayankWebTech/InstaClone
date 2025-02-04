import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as routerLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="MAYANK" size={"lg"} src="/profilepic.jpg"></Avatar>
        <Box fontSize={12} fontWeight={"bold"}>
          <Text>Mayank</Text>
        </Box>
      </Flex>
      <Link
        as={routerLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
