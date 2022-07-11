import { useBreakpoint } from "@chakra-ui/react";

type UseMobileResult = {
  isMobile: boolean;
};

export const useMobile = (): UseMobileResult => {
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "md" || currentBreakpoint === "sm";

  return {
    isMobile,
  };
};
