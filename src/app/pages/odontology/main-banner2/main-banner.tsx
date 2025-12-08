"use client";

import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import style from "./main-banner.module.scss";

import ExportedImage from "next-image-export-optimizer";
import align from "@assets/images/odontology/wecare-align.jpg";
import scanner from "@assets/images/odontology/scanner.jpg";
import treatments from "@assets/images/odontology/treatments.jpg";

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
                <h2>WeCare Align</h2>
                <p>
                  Desenvolvemos nossa própria linha de alinhadores ortodônticos: o WeCare Align <br />
                  Com o WeCare Align, você não precisa esperar meses para iniciar seu tratamento. <br />
                  Aqui, tecnologia, rapidez e cuidado humano se unem para entregar resultados incríveis em menos tempo. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={align}
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
                <h2>Scanner Intraoral</h2>
                <p>
                  Com o nosso scanner intraoral de última geração, em poucos minutos criamos uma imagem 3D perfeita da sua boca, sem desconforto e com precisão máxima. <br />
                  Diga adeus aquela massa na boca, a sensação de engasgo e a demora do processo. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={scanner}
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
                <h2>Tratamentos exclusivos</h2>
                <p>
                  Transforme seu sorriso com nossa odontologia digital de ponta. <br />
                  Utilizamos tecnologia avançada para diagnósticos precisos e tratamentos eficazes, garantindo conforto e resultados excepcionais. <br />
                </p>
                <button className='hc-button-primary-shallow'>Agende sua consulta</button>
              </div>
              <div className={style.swiperImage}>
                <ExportedImage
                  src={treatments}
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
