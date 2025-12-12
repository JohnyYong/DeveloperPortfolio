import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import ProjectCards from "./ProjectCards";

export default function ProjectCoverflow({ projects }) {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Keyboard]}
      effect="coverflow"
      centeredSlides
      grabCursor
      slidesPerView="auto"
      spaceBetween={20}
      navigation
      keyboard={{ enabled: true }}
      coverflowEffect={{
        rotate: 35,
        stretch: 0,
        depth: 160,
        modifier: 1,
        slideShadows: false,
      }}
      style={{ padding: "40px 0" }}
    >
      {projects.map((p, i) => (
        <SwiperSlide
          key={i}
          style={{
            width: "320px", // controls card width in the carousel
          }}
        >
          <ProjectCards {...p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
