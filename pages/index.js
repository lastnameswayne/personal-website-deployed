import NextLink from "next/link";
import fs from "fs";
import {
  ChakraProvider,
  Box,
  Heading,
  Center,
  Divider,
  Text,
  Button,
  Flex,
  Link,
  VStack,
  StackDivider,
  Spacer,
  Image
} from "@chakra-ui/react";

const cardBgColor = "white";

const Home = ({ slugs }) => (
  <ChakraProvider>
    <Box bg="#F3F4F6">
      <Center>
        <Heading m={8} fontSize="7xl">
          Tiarnan Swayne
        </Heading>
      </Center>
      <Text textAlign="center">
        I am a first year CS student at Aarhus Uni. I will be graduating in the
        summer of 2023. In my freetime I enjoy making web-apps, which is
        showcased below. My favorite technologies are GraphQL, TypeScript,
        React, PSQL/SQL-lite.{" "}
      </Text>
      <Text textAlign="center">I also enjoy basketball and music.</Text>
      <Text textAlign="center">
        You can contact me at{" "}
        <Box as="span" textColor="blue">
          <Link>swaynedev@gmail.com</Link>
        </Box>{" "}
        or slide into my Twitter DM's{" "}
        <Box as="span" textColor="blue">
          <Link href="twitter.com/lastnameswayne">@lastnameswayne</Link>
        </Box>
      </Text>
    </Box>
    <Box w="100%" h="1000px" bgGradient="linear(to-b, #AD5151, #4D2525)">
      <Center>
        <Heading m={8} textColor="white" fontSize="5xl">
          Projects
        </Heading>
      </Center>
      <VStack textColor="white" spacing={2} align="center">
        <Box
          pl={2}
          pt={2}
          borderRadius="4px"
          w="400px"
          h="100px"
          textColor="black"
          bg={cardBgColor}
        >
          <Flex>
            <Text fontWeight="bold">LeetBattle</Text>
            <Spacer />
            <Text></Text>
          </Flex>
        </Box>
        <Box h="40px">
          SongLink
        </Box>
        <Box h="40px" >
          CrudApp
        </Box>
        <Box h="40px">
          Vaxxtrack
        </Box>
      </VStack>
      <Center>
        <Box my={8} h="1px" orientation="horizontal" bg="white" w="300px"></Box>
      </Center>
      <Center>
        <Heading textColor="white" fontSize="5xl">
          Articles
        </Heading>
      </Center>
      {slugs.map((slug) => {
        return (
          <Center>
            <NextLink key={slug} href={"/blog/" + slug}>
              <Link textColor="white">{slug}</Link>
            </NextLink>
          </Center>
        );
      })}
      <Center>
        <Box my={8} h="1px" orientation="horizontal" bg="white" w="300px"></Box>
      </Center>
      <Text textAlign="center" textColor="white">
        If you've read this far, feel free to recommend me a song!
      </Text>
    </Box>
  </ChakraProvider>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
export default Home;
