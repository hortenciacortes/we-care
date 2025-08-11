"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import style from "./about.module.scss";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function About() {
  return (
    <section className="grid-pattern">
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
            // loop
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="/about/renata-swiper1.jpg"
                alt="Foto da médica"
                className={style.swiperImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/about/renata-swiper2.jpg"
                alt="Foto da médica"
                className={style.swiperImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/about/renata-swiper3.jpg"
                alt="Foto da médica"
                className={style.swiperImage}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
