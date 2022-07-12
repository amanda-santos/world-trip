import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

import { Slide } from "./Slide";

import continents from "../continents.json";

export const ContinentsSlides = (): ReactElement => {
  return (
    <Flex w="100%" h="600px" mx="auto" mb={["5", "10"]}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        effect="fade"
      >
        {continents.map(({ id, name, description, image }) => (
          <SwiperSlide key={id}>
            <Slide
              title={name}
              description={description}
              image={image}
              link={id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
