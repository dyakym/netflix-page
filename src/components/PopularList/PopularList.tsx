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
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
          1024: {
            spaceBetween: 40,
            slidesPerView: 5,
          },
        }}
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
          <a href="/the-rain">
            <img src="/images/Rectangle7.png" alt="The Rain" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/luna-in-year">
            <img src="/images/Rectangle8.png" alt="Luna in year" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/money-heist">
            <img src="/images/Rectangle9.png" alt="Money Heist" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/squid-game">
            <img src="/images/Rectangle11.png" alt="Squid Game" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/breaking-bad">
            <img src="/images/Rectangle6.png" alt="Breaking Bad" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/the-rain">
            <img src="/images/Rectangle7.png" alt="The Rain" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/luna-in-year">
            <img src="/images/Rectangle8.png" alt="Luna in year" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/money-heist">
            <img src="/images/Rectangle9.png" alt="Money Heist" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/squid-game">
            <img src="/images/Rectangle11.png" alt="Squid Game" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/breaking-bad">
            <img src="/images/Rectangle6.png" alt="Breaking Bad" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PopularList;
