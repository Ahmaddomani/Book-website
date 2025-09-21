import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function CardsSwiper() {
  return (
    <div className="flex justify-center items-center xl:w-1/2 w-full">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="xs:w-[200px] xs:h-[350px] md:w-[300px] md:h-auto"
      >
        {Array(6)
          .fill(0)
          .map((color, index) => {
            return (
              <SwiperSlide
                className={`flex items-center justify-center bg-${color}-500 text-white text-2xl font-bold rounded-xl `}
              >
                <img
                  src={`../../public/thumbnails/movie${index}.webp`}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
