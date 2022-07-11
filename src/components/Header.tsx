import { Box, Flex, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Image from "next/image";

type HeaderProps = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: HeaderProps) => {
  return (
    <Flex as="header" w="100%" h="24">
      {showBackButton && (
        <Icon
          as={ChevronLeftIcon}
          mb="auto"
          mt="auto"
          ml="8"
          fontSize="32"
          cursor="pointer"
        />
      )}

      <Box margin="auto">
        <Image
          src="/assets/logo.svg"
          alt="World Trip logo"
          width={184}
          height={40}
        />
      </Box>
    </Flex>
  );
};
