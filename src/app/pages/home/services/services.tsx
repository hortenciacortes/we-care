import ExportedImage from 'next-image-export-optimizer';
import style from './services.module.scss';

import clinicalConsultation from '@assets/images/services/clinical-consultation.png';
import preventativeHealth from '@assets/images/services/preventative-health.png';
import forwarding from '@assets/images/services/forwarding.png';

export function Services() {
  return (
    <section id='services' className={`${style.container} grid-pattern`}>
      <div className={style.services}>
        <h2>Serviços Médicos</h2>
        
        <div className={style.text}>
          <div className={style.card}>
            <ExportedImage
              src={clinicalConsultation}
              width={120}
              height={120}
              alt="Icone de um estetoscópio"
            />
            <h3>Consultas Clínicas</h3>
            <p>Avaliação geral da saúde, diagnóstico e acompanhamento de sintomas comuns</p>
          </div>

          <div className={style.card}>
            <ExportedImage
              src={preventativeHealth}
              width={120}
              height={120}
              alt="Icone de uma vacina e um pote de remédio"
            />
            <h3>Saúde Preventiva</h3>
            <p>Orientação sobre hábitos saudáveis, vacinação e prevenção de doenças</p>
          </div>

          <div className={style.card}>
            <ExportedImage
              src={forwarding}
              width={120}
              height={120}
              alt="Icone de uma prancheta"
            />
            <h3>Encaminhamentos</h3>
            <p>Quando necessário, encaminhamento para exames e especialistas com acompanhamento</p>
          </div>
        </div>
      </div>
    </section>
  );
}