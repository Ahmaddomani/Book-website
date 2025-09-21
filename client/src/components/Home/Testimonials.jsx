import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    children: {
      name: "Jane D",
      role: "CEO",
      comment:
        "Pagedone is simply the best tool of investment in the market right now.",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
    },
  },
  {
    children: {
      name: "Harsh P.",
      role: "Product Designer",
      comment:
        "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
      image: "https://pagedone.io/asset/uploads/1696229994.png",
    },
  },
  {
    children: {
      name: "Alex R.",
      role: "Marketing Manager",
      comment:
        "The design and usability are top-notch. It really helped me impress my clients.",
      image: "https://pagedone.io/asset/uploads/1696230015.png",
    },
  },
  {
    children: {
      name: "Maria K.",
      role: "Entrepreneur",
      comment:
        "Finally found a solution that saves me time and looks professional!",
      image: "https://pagedone.io/asset/uploads/1696230030.png",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // ✅ arrows
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`p-6  dark:darkClass shadow-lg rounded-2xl flex flex-col items-center text-center border border-gray-700 `}
            >
              <img
                src={item.children.image}
                alt={item.children.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                "{item.children.comment}"
              </p>
              <h3 className="text-lg font-semibold">{item.children.name}</h3>
              <span className="text-sm text-gray-500">
                {item.children.role}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
