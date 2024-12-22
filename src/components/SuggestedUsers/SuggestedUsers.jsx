import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center "} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="David"
        followers={1392}
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjQA8DnMemvaaPzpuvIAWbEmQO7dNVCCmfQ&s"
        }
      />
      <SuggestedUser
        name="Daisy"
        followers={5432}
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDEcUTrFwsVItgf2smdQCyYfZ9Qes8NIpmw&s"
        }
      />
      <SuggestedUser
        name="jenner"
        followers={7564}
        avatar={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_FERoNLrDVgAEMAZx6Q1VpwZYZdN6K3Grw&s"
        }
      />
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://github.com/MayankWebTech"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Mayank web
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
