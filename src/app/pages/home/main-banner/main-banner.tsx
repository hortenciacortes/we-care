import style from "./main-banner.module.scss";

export function MainBanner() {
  return (
    <section className={`${style.container} grid-pattern`}>
      <div className={style.mainBanner}>
        <div className={style.text}>
          <h1 className="linear-vertical">
            Dra. Renata Côrtes 
            <span>Medicina com Cuidado e Humanidade</span>
          </h1>
          
          <p>
            Atendimento personalizado para sua saúde integral. Escuta atenta, diagnóstico preciso e acompanhamento dedicado para promover seu bem-estar e qualidade de vida.
          </p>

          <button className="hc-button-primary-shallow">Agendar consulta</button>
        </div>
      </div>
    </section>
  );
}
