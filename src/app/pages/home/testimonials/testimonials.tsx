"use client";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@styles/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import ExportedImage from 'next-image-export-optimizer';
import style from './testimonials.module.scss';

import man1 from '@assets/images/testimonials/man1.png';
import man2 from '@assets/images/testimonials/man2.png';
import woman1 from '@assets/images/testimonials/woman1.png';
import woman2 from '@assets/images/testimonials/woman2.png';

export function Testimonials() {
  return (
    <section id='testimonials' className={`${style.container} grid-pattern`}>
      <div className={style.testimonials}>
        <h2>Depoimentos</h2>
        

        <div className={style.swiper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            navigation
            pagination={{
              clickable: true,
            }}
            spaceBetween={50}
            slidesPerView={4}
        autoplay={{ delay: 6000 }}
        breakpoints={{
          200: { slidesPerView: 1, pagination: { enabled: true, clickable: true} },
          425: { slidesPerView: 1.2, pagination: { enabled: true, clickable: true} },
          768: { slidesPerView: 2.5, pagination: { enabled: true, clickable: true} },
          1024: { slidesPerView: 2.5 },
          1524: { slidesPerView: 3.5 },
        }}
          >
            <SwiperSlide>
              <div className={style.card}>
                <ExportedImage
                  src={man1}
                  width={120}
                  height={120}
                  alt="Icone de um estetoscópio"
                />
                <h3>Frederico José</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam debitis sint necessitatibus quaerat amet, eos provident qui ab? Sed rem expedita cumque tempore mollitia.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <ExportedImage
                  src={woman1}
                  width={120}
                  height={120}
                  alt="Icone de uma vacina e um pote de remédio"
                />
                <h3>Sicrana Maria</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit sit suscipit nesciunt nostrum excepturi exercitationem id amet quis saepe enim ut facilis pariatur possimus nam similique reiciendis, sunt ex laudantium!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <ExportedImage
                  src={man2}
                  width={120}
                  height={120}
                  alt="Icone de uma prancheta"
                />
                <h3>Beltrano Pereira</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique iure, corporis modi ea cupiditate provident dolorem vitae omnis repellendus nihil sed in error ducimus tempore distinctio enim voluptatem optio.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.card}>
                <ExportedImage
                  src={woman2}
                  width={120}
                  height={120}
                  alt="Icone de uma prancheta"
                />
                <h3>Fulana de tal</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam debitis sint necessitatibus quaerat amet, eos provident qui ab? Sed rem expedita cumque tempore mollitia.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}