"use client";

import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import style from "./main-banner.module.scss";

import ExportedImage from "next-image-export-optimizer";
import slide1 from "@assets/images/main-banner/slide1.jpg";
import slide2 from "@assets/images/main-banner/slide2.jpeg";
import slide3 from "@assets/images/main-banner/slide3.webp";

export function MainBanner() {
  return (
    <section className={`${style.container} grid-pattern`}>
      <div className={style.swiper}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop
          navigation
          autoplay={{ delay: 10000 }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className={style.containSlide}>
              <div className={style.containInfo}>
                <h2>WeCare Saúde</h2>
                <p>
                  Cuidando de você com dedicação e excelência em cada consulta. <br />
                  Nossa clínica oferece tratamentos personalizados para garantir seu bem-estar e um sorriso saudável. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide1}
                  alt="Foto da médicaa"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 400px"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.containSlide}>
              <div className={style.containInfo}>
                <h2>Medicina</h2>
                <p>
                  Sua saúde em boas mãos com nossa equipe médica especializada. <br />
                  Oferecemos cuidados integrados e personalizados para promover seu bem-estar e qualidade de vida. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide2}
                  alt="Foto da médicaa"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 400px"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.containSlide}>
              <div className={style.containInfo}>
                <h2>Odontologia Digital</h2>
                <p>
                  Transforme seu sorriso com nossa odontologia digital de ponta. <br />
                  Utilizamos tecnologia avançada para diagnósticos precisos e tratamentos eficazes, garantindo conforto e resultados excepcionais. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide3}
                  alt="Foto da médicaa"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 400px"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
