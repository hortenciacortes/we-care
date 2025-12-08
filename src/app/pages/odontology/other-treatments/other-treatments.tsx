import style from "./other-treatments.module.scss";

import align from "@assets/images/odontology/align.jpg";
import scanner from "@assets/images/odontology/intraoral-scanner.jpg";
import treatments from "@assets/images/odontology/treatments.jpg";
import whitening from "@assets/images/odontology/whitening.jpg";
import facetas from "@assets/images/odontology/facetas.jpg";
import protese from "@assets/images/odontology/protese.jpg";
import canal from "@assets/images/odontology/canal.jpg";
import extracao from "@assets/images/odontology/extracao.webp";
import fraturas from "@assets/images/odontology/fraturas.jpg";
import alinhadores from "@assets/images/odontology/alinhadores.jpg";
import aparelho from "@assets/images/odontology/aparelho.jpeg";
import contencao from "@assets/images/odontology/contencao.jpeg";
import prevencao from "@assets/images/odontology/prevencao.jpeg";
import sensibilidade from "@assets/images/odontology/sensibilidade.jpeg";
import bruxismo from "@assets/images/odontology/bruxismo.jpg";
import atm from "@assets/images/odontology/atm.jpeg";
import restauracao from "@assets/images/odontology/restauracao.jpg";

import ExportedImage from "next-image-export-optimizer";

export function OtherTreatments() {
  const cardsInfo = [
    {
      category: "Estética do Sorriso",
      subtitle: "Tratamentos focados na harmonia, clareamento e beleza natural do sorriso.",
      items: [
        {
          title: "Clareamento Dentário",
          text:
            "Procedimento seguro para remover manchas e devolver a tonalidade natural dos dentes, com opções em consultório e protocolo combinado.",
          image: whitening,
        },
        {
          title: "Facetas Cerâmicas",
          text:
            "Lâminas de porcelana ultrafinas para corrigir forma, cor e proporção dos dentes com aspecto natural.",
          image: facetas
        },
        {
          title: "Mockup Digital e Impressão 3D",
          text:
            "Simulação do novo sorriso antes do tratamento para visualização e ajustes com máxima previsibilidade.",
          image: scanner
        },
        {
          title: "Restaurações Estéticas",
          text:
            "Correção de fraturas, cáries e imperfeições com resina de alto padrão e mínimo desgaste dental.",
          image: restauracao
        }
      ]
    },

    {
      category: "Reabilitação Oral",
      subtitle: "Soluções completas para devolver função, conforto e estética aos dentes.",
      items: [
        {
          title: "Implantes e Próteses Digitais",
          text:
            "Reposição de dentes com planejamento 3D para maior precisão, conforto e estética.",
          image: protese,
        },
        {
          title: "Tratamento de Canal",
          text:
            "Remoção da infecção da polpa dentária para preservar o dente e eliminar dor.",
          image: canal
        },
        {
          title: "Extração Dentária",
          text:
            "Remoção segura de dentes sem possibilidade de restauração, incluindo sisos.",
          image: extracao
        },
        {
          title: "Dentes Fraturados ou Muito Destruídos",
          text:
            "Reabilitação com coroas ou próteses para devolver função e estética.",
          image: fraturas
        }
      ]
    },

    {
      category: "Ortodontia",
      subtitle: "Alinhamento dental para melhorar mordida, estética e saúde bucal.",
      items: [
        {
          title: "WeCare Align",
          text: "Alinhador exclusivo da WeCare, desenvolvido com planejamento digital avançado para oferecer máximo conforto, discrição e previsibilidade nos resultados.",
          image: align,
        },
        {
          title: "Alinhadores Ortodônticos",
          text:
            "Correção dos dentes com alinhadores transparentes, conforto e estética discreta.",
          image: alinhadores,
        },
        {
          title: "Ortodontia Convencional",
          text:
            "Aparelhos fixos para correções mais complexas de alinhamento e mordida.",
          image: aparelho
        },
        {
          title: "Contenção Ortodôntica",
          text: "Fase final do tratamento para manter os dentes alinhados e evitar recidivas.",
          image: contencao
        }
      ]
    },

    {
      category: "Saúde Preventiva e Funcional",
      subtitle: "Cuidados para prevenção, proteção dos dentes e alívio de desconfortos.",
      items: [
        {
          title: "Prevenção Dentária",
          text:
            "Limpeza profissional, aplicação de flúor e orientações para manter a saúde bucal.",
          image: prevencao,
        },
        {
          title: "Hipersensibilidade",
          text:
            "Tratamentos para reduzir sensibilidade a frio, calor ou estímulos químicos.",
          image: sensibilidade,
        },
        {
          title: "Bruxismo",
          text:
            "Controle do ranger e apertamento dental para evitar desgastes e dores musculares.",
          image: bruxismo,
        },
        {
          title: "Placas Digitais para ATM",
          text:
            "Placas feitas em CAD/CAM para proteção dental e alívio da tensão mandibular.",
          image: atm,
        }
      ]
    }
  ];

  return (
    <section id="treatments" className={`${style.container} grid-pattern`}>
      <div className={style.otherTreatments}>
        {cardsInfo.map((card, index) => (
          <div key={index} className={style.cardCategory}>
            <h3>{card.category}</h3>
            <p>{card.subtitle}</p>
            <div className={style.cardsItems}>
              {card.items.map((item, idx) => (
                <div key={idx} className={style.cardItem}>
                  <div className={style.image}>
                    <ExportedImage
                      src={item.image}
                      alt="Foto da médicaa"
                      aria-hidden="true"
                      sizes="(max-width: 768px) 100vw, 400px"
                      fill
                    />
                  </div>
                  <div className={style.info}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <button>Saiba mais</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
