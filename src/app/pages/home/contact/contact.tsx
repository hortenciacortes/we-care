import style from './contact.module.scss';
import whatsApp from '@assets/images/contact/whatsapp-icon.svg';
import instagram from '@assets/images/contact/instagram-icon.svg';
import phone from '@assets/images/contact/phone-icon.svg';
import map from '@assets/images/contact/map-icon.svg';
import clock from '@assets/images/contact/clock-icon.svg';

export function Contact() {
  return (
    <section id='contact' className="grid-pattern">
      <div className={style.contact}>
        <h2>Contato</h2>
        <p>Se você tiver alguma dúvida precisar de mais informações ou quiser agendar uma consulta, sinta-se à vontade para entrar em contato!</p>

        <div className={style.contactIcons}>
          <a href="tel+556999001982">
            <img
              src={phone.src}
              alt="Ícone de telefone"
              width={48}
              height={48}
            />
            (69) 99900-1982
          </a>
          <a href="https://wa.me/556999001982?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta" target="_blank">
            <img
              src={whatsApp.src}
              alt="Ícone de WhatsApp"
              width={48}
              height={48}
            />
            Whatsapp
          </a>
          <a href="https://instagram.com/reh_cortes" target="_blank">
            <img
              src={instagram.src}
              alt="Ícone de Instagram"
              width={48}
              height={48}
            />
            Instagram
          </a>
        </div>

        <div className={style.contactAddress}>
          <p>
            <img
              src={map.src}
              alt="Ícone de mapa"
              width={24}
              height={24}
            />
            Endereço: Av. Pinheiro Machado, 1394 - São Cristóvão, Porto Velho - RO, 76801-112
          </p>
          <p>
            <img
              src={clock.src}
              alt="Ícone de horário"
              width={24}
              height={24}
            />
            Atendimento: Segunda a Sexta, das 08:00 às 18:00
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.6456893115067!2d-63.90168166141843!3d-8.758631797823067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cdaa525604b%3A0xc676bba4a7b6e6a2!2sAv.%20Pinheiro%20Machado%2C%201394%20-%20S%C3%A3o%20Crist%C3%B3v%C3%A3o%2C%20Porto%20Velho%20-%20RO%2C%2076801-112!5e0!3m2!1spt-BR!2sbr!4v1755032339569!5m2!1spt-BR!2sbr"
            title="Mapa de localização"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
