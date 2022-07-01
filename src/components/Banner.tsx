import { ReactElement } from "react";
import Image from "next/image";
import { useBreakpoint } from "@chakra-ui/react";

import bannerImg from "../../public/assets/banner.svg";
import bannerMobileImg from "../../public/assets/banner-mobile.svg";

export const Banner = (): ReactElement => {
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "md" || currentBreakpoint === "sm";

  return (
    <Image
      src={isMobile ? bannerMobileImg : bannerImg}
      alt="World Trip logo"
      width={1440}
      height={isMobile ? 600 : 400}
      objectFit="cover"
      layout="responsive"
    />
  );
};
