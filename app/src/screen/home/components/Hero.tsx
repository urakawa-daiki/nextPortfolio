import { Stack, Flex, Button, Text, VStack, Box } from "../../../common";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      bg={"gray.50"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        h={"100vh"}
        order={{ base: 1, md: 0 }}
      >
        <VStack
          w={"full"}
          justify={"center"}
          position={"relative"}
          overflow={"visible"}
        >
          <Box
            position={{ base: "static", md: "absolute" }}
            top={"50%"}
            left={5}
          >
            <Text
              color={"black"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "lg", md: "3xl" }}
              whiteSpace={"nowrap"}
              userSelect={"none"}
            >
              誰もが「大切なことに時間を使える」
            </Text>
            <Text
              mt={2}
              whiteSpace={"nowrap"}
              color={"black"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "lg", md: "3xl" }}
              userSelect={"none"}
            >
              そんな社会を作っていく。
            </Text>
          </Box>
        </VStack>
      </Flex>
      <Flex
        w={{ base: "100%", md: "50%" }}
        h={"100vh"}
        backgroundImage={"url(./cafe.jpg)"}
        backgroundPosition={"-50px 0px"}
        backgroundSize={"cover"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"full"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "xl", md: "2xl" }}
              userSelect={"none"}
            >
              Urakawa Daiki’s portfolio
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Flex>
  );
}
