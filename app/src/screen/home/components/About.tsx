import { AiOutlineSwapRight } from "react-icons/ai";
import { Box, HStack, Heading, Text, Container, Button } from "../../../common";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Container as="section" maxW={"full"} bg={"gray.50"} textAlign={"center"}>
      <a id="about" />
      <Box py="12">
        <Heading as="h1" fontSize={"5xl"} py="12" mb={4}>
          About
        </Heading>

        <HStack
          py={16}
          w={"full"}
          justifyContent={"space-evenly"}
          align={"center"}
          spacing={6}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box textAlign={"center"}>
            <Image
              src="/profile.jpg"
              alt={"profile"}
              width={360}
              height={360}
              style={{
                height: "auto",
                borderRadius: "10%",
              }}
            />
          </Box>
          <Box textAlign={"start"} maxW={{ base: "lg", lg: "xl" }}>
            <HStack
              justifyContent={"space-between"}
              mb={2}
              mt={{ base: 10, md: 0 }}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={600}>
                浦川大輝
              </Text>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={600}>
                DAIKI URAKAWA
              </Text>
            </HStack>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              はじめまして!私はIT業界で3年目の社会人です。新卒時に通販会社が立ち上げた新規事業のアプリ開発部署に入社しました。
              1年目では、Next.jsを用いて社内管理システムの開発に携わりました。2年目には、フロントエンドだけでなく、バックエンドやインフラも含めたフルスタックな環境でアプリ開発に取り組みました。
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              現在は、サイト制作のお仕事とコーヒーの焙煎を記録するWebサービスの開発に主に取り組んでいます。多様なプロジェクトに携わりながら、常に品質とユーザーエクスペリエンスの向上を追求しています。
            </Text>
          </Box>
        </HStack>
        <HStack justifyContent={"right"}>
          <Link href="/skill">
            <Button
              variant={"ghost"}
              colorScheme={"blue"}
              size={"md"}
              mr={8}
              rightIcon={<AiOutlineSwapRight />}
            >
              スキルを見る
            </Button>
          </Link>
        </HStack>
      </Box>
    </Container>
  );
}
