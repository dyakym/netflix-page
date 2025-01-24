import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./PopularList.module.css";

function PopularList() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>POPULAR THIS WEEK</div>
      <Swiper spaceBetween={40} slidesPerView={5}>
        <SwiperSlide>
          <img src="/images/Rectangle7.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle8.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle9.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle11.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle6.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle7.png" alt="1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularList;
