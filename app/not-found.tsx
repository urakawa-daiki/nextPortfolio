import NextLink from "next/link";
import { Box, Button, Container, Heading } from "../app/src/common";

export default function NotFound() {
  return (
    <Container as="section" minH={"auto"} maxW={"full"} bg={"gray.50"}>
      <Box
        minH={"90vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading mb={8}>お探しのページが見つかりませんでした。</Heading>
        <Button as={NextLink} href="/">
          トップへ戻る
        </Button>
      </Box>
    </Container>
  );
}
