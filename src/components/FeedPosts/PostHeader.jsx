import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

export const PostHeader = ({ avatar, username }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt={"user profile pic"} size={"sm"} />
        {username}
        <Box color={"gray.500"}>. 1w</Box>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};
