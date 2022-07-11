import { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { TravelType } from "../constants";
import { useMobile } from "../hooks";

type TravelTypeProps = TravelType;

export const Travel = ({ name, imageSrc }: TravelTypeProps): ReactElement => {
  const { isMobile } = useMobile();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {!isMobile && <Image src={imageSrc} alt={name} width={85} height={85} />}
      <Text
        fontSize={isMobile ? "xl" : "2xl"}
        fontWeight="semibold"
        marginTop="6"
      >
        {name}
      </Text>
    </Box>
  );
};
