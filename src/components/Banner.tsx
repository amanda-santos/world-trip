import { ReactElement } from "react";
import Image from "next/image";

import { useMobile } from "../hooks";

export const Banner = (): ReactElement => {
  const { isMobile } = useMobile();

  return (
    <Image
      src={isMobile ? "/assets/banner-mobile.svg" : "/assets/banner.svg"}
      alt="World Trip logo"
      width={1440}
      height={isMobile ? 600 : 400}
      objectFit="cover"
      layout="responsive"
    />
  );
};
