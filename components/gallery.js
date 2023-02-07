import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image
          src="/images/others-image1-2x.jpg"
          alt=""
          width={300}
          height={150}
          objectFit="contain"
        />
      </SwiperSlide>
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
          src="/images/others-image3-2x.jpg"
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
          src="/images/others-image5-2x.jpg"
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
