import style from './contact.module.scss';

export function Contact() {
  return (
    <section className="grid-pattern">
      <div className={style.contact}>
        <h2>Contato</h2>
        <p>Se você tiver alguma dúvida precisar de mais informações ou quiser agendar uma consulta, sinta-se à vontade para entrar em contato!</p>

        <div className={style.contactIcons}>
          <a href="tel+556999001982">
            <img src="/contact/phone-icon.svg" alt="Ícone de telefone" />
            (69) 99900-1982
          </a>
          <a href="https://wa.me/556999001982?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta">
            <img src="/contact/whatsapp-icon.svg" alt="Ícone de WhatsApp" />
            Whatsapp
          </a>
          <a href="https://instagram.com/hortenciacortes">
            <img src="/contact/instagram-icon.svg" alt="Ícone de Instagram" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
