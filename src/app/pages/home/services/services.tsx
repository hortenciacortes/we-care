import style from './services.module.scss';

export function Services() {
  return (
    <section id='services' className={`${style.container} grid-pattern`}>
      <div className={style.services}>
        <h2>Serviços Médicos</h2>
        
        <div className={style.text}>
          <div className={style.card}>
            <img src="services/clinical-consultation.png" alt="Icone de um estetoscópio" />
            <h3>Consultas Clínicas</h3>
            <p>Avaliação geral da saúde, diagnóstico e acompanhamento de sintomas comuns</p>
          </div>

          <div className={style.card}>
            <img src="services/preventative-health.png" alt="Icone de uma vacina e um pote de remédio" />
            <h3>Saúde Preventiva</h3>
            <p>Orientação sobre hábitos saudáveis, vacinação e prevenção de doenças</p>
          </div>

          <div className={style.card}>
            <img src="services/forwarding.png" alt="Icone de uma prancheta" />
            <h3>Encaminhamentos</h3>
            <p>Quando necessário, encaminhamento para exames e especialistas com acompanhamento</p>
          </div>
        </div>
      </div>
    </section>
  );
}