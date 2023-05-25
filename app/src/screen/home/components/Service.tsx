import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
  Center,
  Button,
  HStack,
} from "../../../common";
import { MdCode, MdOutlineScreenshotMonitor } from "react-icons/md";

interface FeatureProps {
  title: string;
  subTitle: string;
  text: string;
  icon: ReactElement;
}

export default function SimpleThreeColumns() {
  return (
    <Container as="section" maxW={"full"} bg={"gray.50"} textAlign={"center"}>
      <a id="service" />
      <Box py="12">
        <Heading as="h1" fontSize={"5xl"} py="12" mb={4}>
          Service
        </Heading>

        <Center py={6}></Center>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          justifyItems={"center"}
        >
          <Feature
            icon={<MdCode size={"100px"} />}
            title={"コーディング"}
            subTitle={"coding"}
            text={
              "デザインの真意を見極め、魅力的なWebサイトを創り上げます。スマートフォン対応、ワードプレスを活用した柔軟な更新性、そしてJavaScriptによるダイナミックなエフェクトなど、多彩なサイトのコーディングに対応して、あなたのビジネスを一層魅力的に演出します。"
            }
          />
          <Feature
            icon={<MdOutlineScreenshotMonitor size={"100px"} />}
            title={"webサービス開発"}
            subTitle={"programming"}
            text={
              "品質とメンテナンス性に優れたReactとReact Nativeの開発者として、魅力的なWebサービスとアプリを提供します。柔軟なソリューションと迅速な対応で、あなたのビジネスの成長を支援し、魅力的なユーザーエクスペリエンスを提供します。"
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}

const Feature = ({ title, subTitle, text, icon }: FeatureProps) => {
  return (
    <Stack maxW={"md"} p={4}>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={600}>
        {title}
      </Text>
      <Text color={"gray.300"} mb={2}>
        {subTitle}
      </Text>
      <Flex align={"center"} justify={"center"} h={"120px"} color={"gray.500"}>
        {icon}
      </Flex>
      <Text color={"gray.600"} mt={4}>
        {text}
      </Text>
    </Stack>
  );
};
