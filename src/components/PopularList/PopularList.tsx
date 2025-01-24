import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./PopularList.module.css";

function PopularList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>POPULAR THIS WEEK</div>

        <div className={styles.navigationButtons}>
          <button className={styles.prevButton}></button>
          <button className={styles.nextButton}></button>
        </div>
      </div>

      <Swiper
        className={styles.customSwiper}
        spaceBetween={40}
        slidesPerView={5}
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        centeredSlides={false}
      >
        <SwiperSlide>
          <img src="/images/Rectangle7.png" alt="The Rain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle8.png" alt="Luna in yaer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle9.png" alt="Money Heist" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle11.png" alt="Squid game" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle6.png" alt="Breaking bad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle7.png" alt="The Rain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle8.png" alt="Luna in yaer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle9.png" alt="Money Heist" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle11.png" alt="Squid game" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Rectangle6.png" alt="Breaking bad" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularList;
