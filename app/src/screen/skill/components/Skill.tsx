import { ReactNode } from "react";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  Stack,
  Container,
  Text,
  Progress,
  GridItem,
  Grid,
  CardBody,
  List,
} from "../../../common";
import { MdMonitor } from "react-icons/md";

export default function Skill() {
  return (
    <Container as="section" maxW={"full"} bg={"gray.50"} textAlign={"center"}>
      <a id="skill" />
      <Box py="12">
        <Heading as="h1" fontSize={"5xl"} py="12" mb={4}>
          Skill
        </Heading>
        <Card
          m={"auto"}
          variant={"outline"}
          size={"md"}
          w={{ base: "full", md: "3xl" }}
          p={4}
        >
          <CardBody m={"auto"} maxW={"3xl"}>
            <List textAlign={"left"}>
              <Text fontSize={{ base: "sm", md: "md" }} as={"li"}>
                前職ではフロントエンドエンジニアとしての業務にとどまらず、アプリのリリースやサーバーの移行といった、システム全体の基盤作りも経験してきました。
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} as={"li"}>
                また常日頃からスピーディに業務を進められるよう、前職時から現在に至るまで、自己学習として実際に自分でもアプリの開発やサーバーの構築を行い、システム開発全体で用いられる技術について学習しています。
              </Text>
            </List>
          </CardBody>
        </Card>

        <SkillsTemplate
          title={"フロントエンド"}
          skills={[
            { technology: "JavaScript", experience: "2年", level: 80 },
            { technology: "TypeScript", experience: "2年", level: 80 },
            { technology: "React", experience: "2年", level: 80 },
            { technology: "React Native", experience: "1.5年", level: 70 },
          ]}
        />
        <SkillsTemplate
          title={"バックエンド"}
          skills={[{ technology: "Node.js", experience: "1.5年", level: 70 }]}
        />
        <SkillsTemplate
          title={"インフラ"}
          skills={[
            { technology: "AWS", experience: "1年", level: 50 },
            { technology: "firebase", experience: "2年", level: 70 },
            { technology: "heroku", experience: "1年", level: 50 },
            { technology: "Docker", experience: "0.5年", level: 50 },
          ]}
        />
        <SkillsTemplate
          title={"その他"}
          skills={[
            { technology: "Git", experience: "2年", level: 70 },
            { technology: "Figma", experience: "2年", level: 60 },
          ]}
        />
      </Box>
    </Container>
  );
}

const ItemContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box h={50} display={"flex"} alignItems={"center"}>
      {children}
    </Box>
  );
};

function SkillsTemplate({
  title,
  skills,
}: {
  title: ReactNode;
  skills: { technology: string; experience: string; level: number }[];
}) {
  type Values = {
    technologies: string[];
    experiences: string[];
    levels: number[];
  };
  const { technologies, experiences, levels } = skills.reduce(
    (result, skill) => {
      const { technology, experience, level } = skill;
      result.technologies.push(technology);
      result.experiences.push(experience);
      result.levels.push(level);
      return result;
    },
    { technologies: [], experiences: [], levels: [] } as Values
  );

  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      my={6}
    >
      <Card variant={"outline"} size={"md"} w={{ base: "full", md: "3xl" }}>
        <CardHeader
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={6}
        >
          <MdMonitor size={32} />
          <Heading ml={1} size="lg">
            {title}
          </Heading>
        </CardHeader>
        <CardBody display={"flex"} justifyContent={"center"}>
          <Grid
            templateAreas={`"languageHeader experienceHeader levelHeader"
        "language experience level"`}
            gridTemplateRows={"40px 1fr"}
            gridTemplateColumns={"1fr 1fr 3fr"}
            textAlign={"left"}
            w={"3xl"}
            my={2}
            color="blackAlpha.700"
          >
            <GridItem pl="2" area={"languageHeader"}>
              <Text fontSize={{ base: "xs", md: "md" }} mr={4}>
                技術
              </Text>
            </GridItem>
            <GridItem pl="2" area={"experienceHeader"}>
              <Text fontSize={{ base: "xs", md: "md" }} mr={4}>
                経験年数
              </Text>
            </GridItem>
            <GridItem pl="2" area={"levelHeader"}>
              <Text fontSize={{ base: "xs", md: "md" }} mr={4}>
                スキル
              </Text>
            </GridItem>
            <GridItem pl="2" area={"language"}>
              {technologies.map((language) => (
                <ItemContainer key={language}>
                  <Text
                    mb={2}
                    fontWeight={"bold"}
                    fontSize={{ base: "sm", md: "lg" }}
                    mr={4}
                  >
                    {language}
                  </Text>
                </ItemContainer>
              ))}
            </GridItem>
            <GridItem pl="2" area={"experience"}>
              {experiences.map((language) => (
                <ItemContainer key={language}>
                  <Text mb={2} fontSize={{ base: "xs", md: "lg" }} mr={4}>
                    {language}
                  </Text>
                </ItemContainer>
              ))}
            </GridItem>
            <GridItem pl="2" area={"level"}>
              <>
                {levels.map((v, i) => (
                  <ItemContainer key={i}>
                    <Progress
                      value={v}
                      colorScheme={"messenger"}
                      w={{ base: "auto", md: "sm" }}
                      minW={140}
                    />
                  </ItemContainer>
                ))}
              </>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </Stack>
  );
}
