import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

type SlideProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const Slide = ({ title, description, image, link }: SlideProps) => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={image}
      bgPosition="100% 50%"
      bgRepeat="no-repeat"
      bgSize="cover"
      textAlign="center"
      opacity={0.9}
      boxShadow="inset 0 0 0 2000px rgba(28, 20, 1, 0.5)"
    >
      <Link href={`/continent/${link}`}>
        <a>
          <Heading fontSize={["4xl", "5xl"]} color="gray.100" fontWeight="bold">
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={["xl", "2xl"]}
            mt={["2", "4"]}
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  );
};
