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
              はじめまして！浦川大輝と申します。
              <br />
              私は新卒で通販会社に入社し、新規事業のアプリ開発の部署で働いておりました。
              <br />
              入社後は社内システムの運用、ReactやReact
              Nativeを中心とした新規サービス開発を行い、2年目からは
              フロントエンドだけでなく、バックエンドやインフラも含めたフルスタックな環境で新規サービスの開発に取り組みました。
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              現在はフリーランスとしてフロントエンドを中心にプロジェクトに携わっております。多様なプロジェクトに携わりながら、常に品質とユーザーエクスペリエンスの向上を追求しています。
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
