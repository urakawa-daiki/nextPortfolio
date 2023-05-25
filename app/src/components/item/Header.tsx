"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "../../common";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["about", "service", "works", "contact"];

const NavButton = ({ children }: { children: ReactNode }) => {
  return (
    <Link
      href={`/#${children}`}
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

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" w="full" position="fixed" top={0} zIndex={100}>
      <Box bg={"gray.50"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box flex={1}>
            <NextLink href={"/"}>
              <Text color={"black"}>Urakawa Daiki’s portfolio</Text>
            </NextLink>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
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
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} background={"gray.50"}>
            {Links.map((link) => (
              <NavButton key={link}>{link}</NavButton>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
