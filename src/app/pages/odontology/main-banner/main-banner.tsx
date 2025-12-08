import style from "./main-banner.module.scss";

import ExportedImage from "next-image-export-optimizer";
import align from "@assets/images/odontology/smile.jpg";

import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

export function MainBanner() {
  return (
    <section className={`${style.container} grid-pattern`}>
      <div className={style.bannerContent}>
        <div className={style.containInfo}>
          <h1>Odontologia Digital</h1>
          <p>
            Na WeCare Odontologia, unimos tecnologia de ponta e cuidado humano para transformar seu sorriso. <br />
            Agende sua consulta e descubra como podemos cuidar da sua saúde bucal com excelência e inovação.
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
          <button className='hc-button-primary'>Agende sua consulta</button>
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
    </section>
  );
}
