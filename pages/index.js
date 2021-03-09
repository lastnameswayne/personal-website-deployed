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
  Image,
} from "@chakra-ui/react";

const cardBgColor = "white";

const Home = ({ slugs }) => (
  <ChakraProvider>
    <Box bg="#F3F4F6" align="center">
      <Center>
        <Heading m={8} fontSize="7xl">
          Tiarnan Swayne
        </Heading>
      </Center>
      <Text>
        I am a first year CS student at Aarhus Uni. I will be graduating in the
        summer of 2023. In my freetime I enjoy making web-apps, which is
        showcased below. My favorite technologies are GraphQL, TypeScript,
        React, PSQL/SQL-lite.{" "}
      </Text>
      <Text>I also enjoy basketball and music.</Text>
      <Text>
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
    <Box w="100%" h="1300px" align = "center" bgGradient="linear(to-b, #AD5151, #4D2525)">
      <Box textColor="white">
        <Center>
          <Heading m={8} textColor="white" fontSize="5xl">
            Projects
          </Heading>
        </Center>
        <Box mt={3} w="300px" word-wrap="break-word">
        <Text fontSize="xl">LeetBattle</Text>
          <Text>
            A platform for challenging your friends in competitive programming problems. Two players battle for who can solve the problem first!
          </Text>
          <Flex justifyContent="center">
            <Button m={2} align="center" variant ="outline" textColor="white">Demo</Button>
            <Button m={2} variant ="outline" textColor="white">GitHub</Button>
          </Flex>
        </Box>
        <Box mt={3} w="300px" word-wrap="break-word">
        <Text fontSize="xl">SongLink</Text>
          <Text>
            A tool for artists to create beautiful landing pages for their tracks. Just add your cover image and favorite streaming services.
          </Text>
          <Flex justifyContent="center">
            <Button m={2} align="center" variant ="outline" textColor="white">Demo</Button>
            <Button m={2} variant ="outline" textColor="white">GitHub</Button>
          </Flex>
        </Box>
        <Box mt={3} w="300px" word-wrap="break-word">
        <Text fontSize="xl">Crud-App</Text>
          <Text>
            App which isn't done but GraphQL CRUD Auth etc.
          </Text>
          <Flex justifyContent="center">
            <Button m={2} align="center" variant ="outline" textColor="white">Demo</Button>
            <Button m={2} variant ="outline" textColor="white">GitHub</Button>
          </Flex>
        </Box>
         <Box mt={3} w="300px" word-wrap="break-word">
          <Text fontSize="xl">VaxxTrack</Text>
          <Text>
            Lightweight Twitter Bot using Python and AWS-Lambda to execute a tweet which tracks the Covid-19 Vaccine Progress daily. Check it out on GitHub and Twitter:
          </Text>
          <Flex justifyContent="center">
            <Button m={2} align="center" variant ="outline" textColor="white">Twitter</Button>
            <Button m={2} variant ="outline" textColor="white">GitHub</Button>
          </Flex>
        </Box>
      </Box>
      <Box my={4} bg = "white" h="1px" w="300px"></Box>
      <Box>
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
      </Box>
      <Box my={4} bg = "white" h="1px" w="300px"></Box>
      <Box>
      <Text textAlign="center" textColor="white">
        If you've read this far, feel free to recommend me a song!
      </Text>
      </Box>
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
