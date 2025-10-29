import style from "./main-banner.module.scss";

export function MainBanner() {
  return (
    <section className={`${style.container} grid-pattern`}>
        <img
          src="/renata-cortes.webp"
          alt=""
          style={{ display: 'none', width: 0, height: 0, position: 'absolute' }}
          loading="eager"
          fetchPriority="high"
        />
      <div className={style.mainBanner}>
        <div className={style.text}>
          <h1 className="linear-vertical">
            We Care Saúde
            <span>Cuidando do seu sorriso e da sua saúde</span>
          </h1>
          
          <p>
            A WeCare Saúde oferece um atendimento completo e humanizado em odontologia e medicina,
            com tecnologia de ponta e uma equipe de especialistas dedicados ao seu bem-estar.
          </p>

          <button className="hc-button-primary-shallow">Agendar consulta</button>
        </div>
      </div>
    </section>
  );
}
