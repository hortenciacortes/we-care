"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import style from "./about.module.scss";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ExportedImage from 'next-image-export-optimizer';

import slide1 from '@assets/images/about/renata-swiper1.jpg';
import slide2 from '@assets/images/about/renata-swiper2.jpg';
import slide3 from '@assets/images/about/renata-swiper3.jpg';

export function About() {
  return (
    <section id='about' className="grid-pattern">
      <div className={style.about}>
        <div className={style.text}>
          <h2>Sobre mim</h2>
          <p>
            Sou médica formada pela Faculdade Metropolitana, movida pela vocação de
            cuidar das pessoas com atenção, respeito e empatia.
          </p>

          <p>
            Acredito que a medicina vai além do diagnóstico: é sobre ouvir,
            compreender e oferecer o melhor cuidado possível para cada paciente.
          </p>

          <p>
            Atendo como clínica geral, acompanhando casos de saúde preventiva,
            orientação médica e tratamento de condições comuns, sempre buscando
            criar uma relação de confiança e acolhimento. Meu compromisso é unir
            conhecimento técnico com um olhar humano, ajudando meus pacientes a
            viverem com mais saúde e qualidade de vida.
          </p>
        </div>

        <div className={style.swiper}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            loop
            navigation
            pagination={{ clickable: true }}
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
          </Swiper>
        </div>
      </div>
    </section>
  );
}
