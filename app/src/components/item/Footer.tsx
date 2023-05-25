import { ReactNode } from "react";
import { Box, Text, Flex, HStack, Link, VStack } from "../../common";

const Links = ["about", "service", "works", "contact"];

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      href={`#${children}`}
      p={2}
      _hover={{
        textDecoration: "none",
        userSelect: "none",
      }}
    >
      <Text fontWeight={500} fontSize={"large"} color={"black"} border={"none"}>
        {children}
      </Text>
    </Link>
  );
};

export default function Footer() {
  return (
    <Box as="footer" w="full">
      <Box bg={"gray.50"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"left"}>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavButton key={link}>{link}</NavButton>
              ))}
            </HStack>
          </Flex>
        </Flex>
        <Box maxW="full" py={4}>
          <Text as="small" color={"gray.400"}>
            © 2023 urakawa daiki All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
