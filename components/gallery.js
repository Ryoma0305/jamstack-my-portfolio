import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper slidesPerView={3}>
      <SwiperSlide>
        <Image
          src="/images/others-image2-2x.jpg"
          alt=""
          width={300}
          height={150}
          objectFit="contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/others-image4-2x.jpg"
          alt=""
          width={300}
          height={150}
          objectFit="contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/others-image3-2x.jpg"
          alt=""
          width={300}
          height={150}
          objectFit="contain"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
