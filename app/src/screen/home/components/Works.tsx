import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  Container,
  Avatar,
  Button,
} from "../../../common";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <Container as="section" maxW={"full"} bg={"gray.50"} textAlign={"center"}>
      <a id="works" />
      <Box py="12">
        <Heading as="h1" fontSize={"5xl"} py="12" mb={4}>
          Works
        </Heading>

        <Stack py={6}>
          <WorksCard
            title="ポートフォリオ"
            text="このウェブサイトは、Next.js (v13)とchakraUIを駆使して制作しました。"
            image="/works/portfolio.png"
          />
          <WorksCard
            title="RoastGenius"
            text="このサービスは、個人開発によって生まれました。制作期間は約4ヶ月です。
            このWebサービスでは、コーヒーの焙煎に関する記録を簡単かつ効果的に管理できます。Next.js (v12)とMUIを駆使したモダンなフロントエンドを採用し、使いやすさと視覚的な魅力を追求しました。
バックエンドにはFirebaseとmicroCMSを使用し、データの保存と取得をスムーズに行い、ユーザーの体験を最適化しました。

"
            image="/works/roastgenius.png"
            url="https://roastgenius.app/"
          />
          <WorksCard
            title="CROSS TOKYO"
            text="このサイトは、CROSS TOKYO様からのご依頼を受け、Studioを使用して制作いたしました。"
            image="/works/crosstokyo.png"
            url="https://www.crosstokyo.co.jp/"
          />
        </Stack>
      </Box>
    </Container>
  );
}

function WorksCard({
  title,
  text,
  url,
  image,
}: {
  title: string;
  text: string;
  url?: string;
  image: string;
}) {
  const IMAGE_WIDTH = 300;
  const IMAGE_HEIGHT = 250;
  return (
    <Center py={6}>
      <Box
        maxW={"600px"}
        w={"full"}
        bg={"white"}
        boxShadow={"md"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"auto"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={image}
            alt={"blog"}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            quality={80}
            style={{
              width: "100%",
              objectFit: "cover",
              height: "auto",
            }}
          />
        </Box>
        <Stack textAlign={"left"}>
          <Heading
            color={"gray.700"}
            fontSize={"xl"}
            fontFamily={"body"}
            mb={2}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>{text}</Text>
          {url && (
            <Link href={url} target="_blank">
              <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                {url}
              </Button>
            </Link>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
