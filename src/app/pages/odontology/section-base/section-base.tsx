import ExportedImage from "next-image-export-optimizer";
import style from "./section-base.module.scss";
import { StaticImageData } from "next/image";

type SectionBaseProps = {
  id: string;
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  cardsInfo: { title: string; text: string }[];
};

export function SectionBase({ id, title, image, cardsInfo }: SectionBaseProps) {
  return (
    <section id={id} className="grid-pattern">
      <div className={style.weCareAlign}>
        <div className={style.imageContainer}>
          <ExportedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>

        <h2>{title}</h2>

        <div className={style.textContent}>
          {cardsInfo.map((card, index) => (
            <div key={index} className={style.textCard}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}

          <button className='hc-button-primary'>Agende sua consulta</button>
        </div>
      </div>
    </section>
  );
}
