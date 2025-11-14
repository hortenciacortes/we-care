"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import style from "./about.module.scss";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ExportedImage from 'next-image-export-optimizer';

import slide1 from '@assets/images/about/slide1.jpg';
import slide2 from '@assets/images/about/slide2.jpeg';
import slide3 from '@assets/images/about/slide3.jpg';
import slide4 from '@assets/images/about/slide4.jpg';
import slide5 from '@assets/images/about/slide5.webp';

export function About() {
  return (
    <section id='about' className="grid-pattern">
      <div className={style.about}>
        <div className={style.text}>
          <h2>QUEM SOMOS</h2>
          <p>
            Na WeCare Odontologia, acreditamos no poder transformador de um sorriso saudável. Há 10 anos, nos dedicamos a oferecer excelência em tratamentos odontológicos e a promover bem-estar, confiança e felicidade para cada paciente que atendemos.
          </p>

          <p>
            Nossa missão é mais do que cuidar de sorrisos, é transformar vidas. Com uma equipe qualificada e apaixonada, combinamos conhecimento técnico com empatia para garantir um atendimento ético, humano e acolhedor.
          </p>

          <p>
            Valorizamos a individualidade de cada paciente. Nosso compromisso é entender suas necessidades e proporcionar tratamentos que aliem tecnologia de ponta, conforto e resultados duradouros.
          </p>
        </div>

        <div className={style.swiper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide1}
                  alt="Foto da médica"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide2}
                  alt="Foto da médica"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide3}
                  alt="Foto da médica"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide4}
                  alt="Foto da médica"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={slide5}
                  alt="Foto da médica"
                  aria-hidden="true"
                  sizes="(max-width: 768px) 100vw, 600px"
                  fill
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
