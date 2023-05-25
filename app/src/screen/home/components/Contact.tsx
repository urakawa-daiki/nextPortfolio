import { Avatar, Box, Container, Heading, Stack, Text } from "../../../common";
import Link from "next/link";

export default function Contact() {
  return (
    <Container as="section" maxW={"full"} bg={"gray.50"} textAlign={"center"}>
      <a id="contact" />
      <Box py="12">
        <Heading as="h1" fontSize={"5xl"} pt="12" mb={4}>
          Contact
        </Heading>
      </Box>

      <Stack
        bg={"gray.50"}
        py={16}
        px={8}
        spacing={{ base: 8, md: 10 }}
        align={"center"}
        direction={"column"}
      >
        <Text fontSize={{ base: "xl" }} textAlign={"center"} maxW={"3xl"}>
          何かございましたら、 TwitterのDMにてお気軽にご連絡ください。
        </Text>
        <Box textAlign={"center"}>
          <Avatar src={"./profile.jpg"} mb={2} />

          <Text fontWeight={600}>浦川大輝</Text>
          <Link href="https://twitter.com/ura_engineer/">
            <Text color={"skyblue"}>https://twitter.com/ura_engineer/</Text>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
