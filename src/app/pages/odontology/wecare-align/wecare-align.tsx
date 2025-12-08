import style from "./wecare-align.module.scss";
import ExportedImage from 'next-image-export-optimizer';

import align from "@assets/images/odontology/align.jpg";

import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

export function WeCareAlign() {
  return (
    <section id='align' className="grid-pattern">
      <div className={style.about}>
        <div className={style.text}>
          <h2>WeCare Align</h2>
          <p>
            Na WeCare, acreditamos que cada paciente merece um tratamento exclusivo, moderno e rápido. Por isso, além de oferecermos a tecnologia mais avançada em odontologia digital, nós desenvolvemos nossa própria linha de alinhadores ortodônticos: o WeCare Align.
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
        </div>

        <div className={style.image}>
          <ExportedImage
            src={align}
            alt="Foto da médica"
            aria-hidden="true"
            sizes="(max-width: 768px) 100vw, 600px"
            fill
          />
        </div>
      </div>
    </section>
  );
}
