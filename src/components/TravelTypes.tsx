import { SimpleGrid } from "@chakra-ui/react";
import { ReactElement } from "react";
import { TRAVEL_TYPES } from "../constants";
import { useMobile } from "../hooks";
import { Travel } from "./Travel";

export const TravelTypes = (): ReactElement => {
  const { isMobile } = useMobile();

  return (
    <SimpleGrid
      columns={isMobile ? 2 : 5}
      spacingY={2}
      spacingX={"28"}
      margin={8}
      justifyContent="center"
      alignContent="center"
    >
      {TRAVEL_TYPES.map(({ name, imageSrc }) => (
        <Travel key={name} name={name} imageSrc={imageSrc} />
      ))}
    </SimpleGrid>
  );
};
