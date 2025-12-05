"use client";

import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import style from "./main-banner.module.scss";

import ExportedImage from "next-image-export-optimizer";
import slide1 from "@assets/images/main-banner/slide1.jpg";
import slide2 from "@assets/images/main-banner/slide2.jpeg";
import slide3 from "@assets/images/main-banner/slide3.webp";

import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

export function MainBanner() {
  return (
    <section className={`${style.container} grid-pattern`}>
      <div className={style.swiperBanner}>
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
                  Nossa missão é cuidar de você com excelência, tecnologia e um atendimento que acolhe.
                  Saúde integrada para uma vida plena.
                </p>

                <div className={style.detach}>
                  <div>
                    <h4>
                      <WorkspacePremiumOutlinedIcon />
                      Confiança
                      </h4>
                    <p>Equipe qualificada e ambiente seguro para cuidar da sua saúde.</p>
                  </div>
                  <div>
                    <h4>
                      <VolunteerActivismOutlinedIcon />
                      Cuidado
                    </h4>
                    <p>Atendimento humanizado e focado no seu bem-estar integral.</p>
                  </div>
                </div>
                
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
                
                <div className={style.detach}>
                  <div>
                    <h4>
                      <VaccinesOutlinedIcon />
                      Prevenção
                    </h4>
                    <p>Check-ups regulares para manter sua saúde em dia.</p>
                  </div>
                  <div>
                    <h4>
                      <HealingOutlinedIcon />
                      Tratamento
                    </h4>
                    <p>Planos de tratamento personalizados para suas necessidades.</p>
                  </div>
                </div>
                
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

                <div className={style.detach}>
                  <div>
                    <h4>
                      <AirlineSeatReclineExtraOutlinedIcon />
                      Conforto
                    </h4>
                    <p>Cuidamos do seu sorriso com tecnologia de ponta e atendimento humanizado.</p>
                  </div>
                  <div>
                    <h4>
                      <InventoryOutlinedIcon />
                      Tratamento
                    </h4>
                    <p>Planos de tratamento personalizados para suas necessidades.</p>
                  </div>
                </div>

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
